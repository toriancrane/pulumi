#!/usr/bin/env bash

# This script regenerates all Protobuf/gRPC client files.
#
# For now, it must be run manually, and the results are checked into source control. Eventually we
# might choose to automate this process as part of the overall build so that it's less manual and
# hence error prone.
#
# This script relies only on Docker. The container holds the installation of gRPC, tools, etc., for
# different languages, so nothing is else required to be installed on your machine. We use the
# standard Pulumi build container.

set -o errexit
set -o pipefail

PULUMI_BUILD_CONTAINER_VERSION=v0.3.0


# First build the image for the Pulumi Build Container
echo "* Building Pulumi Build Container:"
docker build build-container -t "pulumi/pulumi-build-container:${PULUMI_BUILD_CONTAINER_VERSION}" --platform linux/x86_64

# Run as the _current_ user, so that the generated files are owned by the current user, not root.
USER=$(id -u):$(id -g)

DOCKER_RUN="docker run --user $USER -it --rm -w /local -v $(pwd)/../sdk/proto/go:/go  -v $(pwd)/../sdk/python:/python -v $(pwd)/../sdk/nodejs:/nodejs -v $(pwd):/local pulumi/pulumi-build-container:${PULUMI_BUILD_CONTAINER_VERSION}"

PROTOC_VERSION=$($DOCKER_RUN protoc --version | head -n1 | tr -d '\n\r')

echo "* Generating Protobuf/gRPC SDK files:"
echo -e "\tVERSION: $PROTOC_VERSION"
echo -e "Generated by version $PROTOC_VERSION of protoc" > ./grpc_version.txt

# `status.proto` is in our source tree so that we can implement initialization failure in the
# dynamic client (written in JS) using the protobuf notion of "details" -- arbitrary protobuf
# messages packaged up inside of an error. Hence, JavaScript and Python include it but Go does not.

$DOCKER_RUN /bin/bash -c 'set -x && GO_PULUMIRPC=/go && \
    PROTO_FILES=$(find . -name "*.proto" -not -name "status.proto") && \
    TEMP_DIR=/tmp/go-build                          && \
    echo -e "\tGO temp dir: $TEMP_DIR"              && \
    mkdir -p "$TEMP_DIR"                            && \
    protoc \
      --go_out=$TEMP_DIR --go_opt=paths=source_relative \
      --go-grpc_out=$TEMP_DIR --go-grpc_opt=paths=source_relative \
      $PROTO_FILES && \
    rm -rf "$GO_PULUMIRPC"/* && \
    cp -r "$TEMP_DIR"/pulumi/* "$GO_PULUMIRPC"'

# Protoc for JavaScript has a bug where it emits Google Closure Compiler directives in the module prologue that mutate
# the global object, which causes side-by-side bugs in pulumi/pulumi (pulumi/pulumi#2401). The protoc compiler
# absolutely should not be emitting commonjs modules that mutate global, but alas, it does, and we have to sed the
# output to not do that.
#
# We're replacing the literal code string
#   var global = Function('return this')();
# with
#   var proto = { pulumirpc: {} }, global = proto;
#
# This sets up the remainder of the protobuf file so that it works fine, but doesn't mess with global.
$DOCKER_RUN /bin/bash -c 'set -x && JS_PULUMIRPC=/nodejs/proto && \
    JS_PROTOFLAGS="import_style=commonjs,binary"   && \
    PROTO_FILES=$(find . -name "*.proto") && \
    echo -e "\tJavaScript: $JS_PULUMIRPC [$JS_PROTOFLAGS]" && \
    TEMP_DIR=/tmp/nodejs-build                 && \
    echo -e "\tJavaScript temp dir: $TEMP_DIR" && \
    mkdir -p "$TEMP_DIR"                       && \
    protoc --js_out=$JS_PROTOFLAGS:$TEMP_DIR --ts_out=service=grpc-node,mode=grpc-js:${TEMP_DIR} --grpc_out=grpc_js,minimum_node_version=6:$TEMP_DIR \
        --plugin=protoc-gen-grpc=/usr/bin/grpc_tools_node_protoc_plugin --plugin=protoc-gen-ts=/usr/bin/protoc-gen-ts \
        $PROTO_FILES && \
    find $TEMP_DIR && \
    sed -i "s|../pulumi/|./|" "$TEMP_DIR"/**/*.ts && \
    sed -i "s|^var global = .*;|var proto = { pulumirpc: {} }, global = proto;|" "$TEMP_DIR"/**/*.js && \
    sed -i "s|^var grpc = require(.*);|var grpc = require('\''@grpc\/grpc-js'\'');|" "$TEMP_DIR"/**/*.js && \
    sed -i "s|require('\''../pulumi/|require('\''./|" "$TEMP_DIR"/pulumi/*.js && \
    rm -rf "$JS_PULUMIRPC"/* && \
    cp "$TEMP_DIR"/google/protobuf/*.js "$JS_PULUMIRPC" && \
    cp "$TEMP_DIR"/google/protobuf/*.ts "$JS_PULUMIRPC" && \
    cp -r "$TEMP_DIR"/pulumi/* "$JS_PULUMIRPC"'

# Protoc for Python has a bug where, if your proto files are all in the same directory relative
# to one another, imports of said proto files will produce imports that don't work using Python 3.
#
# Since our proto files are all in the same directory, this little bit of sed rewrites the broken
# imports that protoc produces, of the form
#     import foo_pb2 as bar
# to the form
#     from . import foo_pb2 as bar
# This form is semantically equivalent and is accepted by both Python 2 and Python 3.
#
# mypy_protoc doesn't yet support aio which we use (https://github.com/nipunn1313/mypy-protobuf/issues/216) so
# we 'sed' to do some replacements to support that, adding an import for grpc.aio and typing and changing
# grpc.Server to Union[grpc.Server, grpc.aio.Server].
#
# mypy_protoc also marks all server methods as abstract, they aren't really abstract because they have default
# implementations that simply return a grpc error that it's not implemented, we make use of those default
# methods so don't want type checking telling us to fill them all in.

$DOCKER_RUN /bin/bash -c 'PY_PULUMIRPC=/python/lib/pulumi/runtime/proto/ && \
    PROTO_FILES=$(find . -name "*.proto" -not -name "status.proto") && \
    echo -e "\tPython: $PY_PULUMIRPC" && \
    TEMP_DIR="/tmp/python-build"      && \
    echo -e "\tPython temp dir: $TEMP_DIR" && \
    mkdir -p "$TEMP_DIR" && \
    python3 -m grpc_tools.protoc -I./ --python_out="$TEMP_DIR" --mypy_out="$TEMP_DIR" --grpc_python_out="$TEMP_DIR" --mypy_grpc_out="$TEMP_DIR" $PROTO_FILES && \
    sed -i "s/^from pulumi import \([^ ]*\)_pb2 as \([^ ]*\)$/from . import \1_pb2 as \2/" "$TEMP_DIR"/pulumi/*.py && \
    sed -i "s/^from pulumi.codegen import \([^ ]*\)_pb2 as \([^ ]*\)$/from .codegen import \1_pb2 as \2/" "$TEMP_DIR"/pulumi/*.py && \
    sed -i "s/^import grpc$/import grpc\nimport grpc.aio\nimport typing/" "$TEMP_DIR"/pulumi/*.pyi && \
    sed -i "s/: grpc\.Server/: typing.Union[grpc.Server, grpc.aio.Server]/" "$TEMP_DIR"/pulumi/*.pyi && \
    sed -i "s/@abc.abstractmethod//" "$TEMP_DIR"/pulumi/*.pyi && \
    rm -rf "$PY_PULUMIRPC"/* && \
    cp -r "$TEMP_DIR"/pulumi/* "$PY_PULUMIRPC"'

# python protoc doesn't generate __init__.py files, and autogenerating them is a bit tricky, so we just
# restore them from git after each generate.
cd ..
git diff --name-only --diff-filter D | grep __init__.py | xargs git restore

echo "* Done."
