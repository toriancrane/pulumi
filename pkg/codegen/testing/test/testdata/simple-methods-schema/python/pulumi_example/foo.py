# coding=utf-8
# *** WARNING: this file was generated by test. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities
from . import nested as _nested
import pulumi_random

__all__ = ['FooArgs', 'Foo']

@pulumi.input_type
class FooArgs:
    def __init__(__self__):
        """
        The set of arguments for constructing a Foo resource.
        """
        pass


class Foo(pulumi.ComponentResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 __props__=None):
        """
        Create a Foo resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: Optional[FooArgs] = None,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Create a Foo resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param FooArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(FooArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 __props__=None):
        if opts is None:
            opts = pulumi.ResourceOptions()
        else:
            opts = copy.copy(opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is not None:
            raise ValueError('ComponentResource classes do not support opts.id')
        else:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = FooArgs.__new__(FooArgs)

        super(Foo, __self__).__init__(
            'example::Foo',
            resource_name,
            __props__,
            opts,
            remote=True)

    @pulumi.output_type
    class BarResult:
        def __init__(__self__, some_value=None):
            if some_value and not isinstance(some_value, str):
                raise TypeError("Expected argument 'some_value' to be a str")
            pulumi.set(__self__, "some_value", some_value)

        @property
        @pulumi.getter(name="someValue")
        def some_value(self) -> str:
            return pulumi.get(self, "some_value")

    def bar(__self__, *,
            baz_required: pulumi.Input['_nested.BazArgs'],
            bool_value_required: pulumi.Input[bool],
            name_required: pulumi.Input['pulumi_random.RandomPet'],
            string_value_required: pulumi.Input[str],
            baz: Optional[pulumi.Input['_nested.BazArgs']] = None,
            baz_plain: Optional['_nested.BazArgs'] = None,
            bool_value: Optional[pulumi.Input[bool]] = None,
            bool_value_plain: Optional[bool] = None,
            name: Optional[pulumi.Input['pulumi_random.RandomPet']] = None,
            name_plain: Optional['pulumi_random.RandomPet'] = None,
            string_value: Optional[pulumi.Input[str]] = None,
            string_value_plain: Optional[str] = None) -> pulumi.Output['Foo.BarResult']:
        """
        A description of bar.
        """
        __args__ = dict()
        __args__['__self__'] = __self__
        __args__['bazRequired'] = baz_required
        __args__['boolValueRequired'] = bool_value_required
        __args__['nameRequired'] = name_required
        __args__['stringValueRequired'] = string_value_required
        __args__['baz'] = baz
        __args__['bazPlain'] = baz_plain
        __args__['boolValue'] = bool_value
        __args__['boolValuePlain'] = bool_value_plain
        __args__['name'] = name
        __args__['namePlain'] = name_plain
        __args__['stringValue'] = string_value
        __args__['stringValuePlain'] = string_value_plain
        return pulumi.runtime.call('example::Foo/bar', __args__, res=__self__, typ=Foo.BarResult)

    def baz(__self__) -> None:
        __args__ = dict()
        __args__['__self__'] = __self__
        pulumi.runtime.call('example::Foo/baz', __args__, res=__self__)

    @pulumi.output_type
    class GenerateKubeconfigResult:
        def __init__(__self__, kubeconfig=None):
            if kubeconfig and not isinstance(kubeconfig, str):
                raise TypeError("Expected argument 'kubeconfig' to be a str")
            pulumi.set(__self__, "kubeconfig", kubeconfig)

        @property
        @pulumi.getter
        def kubeconfig(self) -> str:
            return pulumi.get(self, "kubeconfig")

    def generate_kubeconfig(__self__, *,
                            bool_value: bool) -> pulumi.Output['Foo.GenerateKubeconfigResult']:
        """
        Do something with something else
        """
        __args__ = dict()
        __args__['__self__'] = __self__
        __args__['boolValue'] = bool_value
        return pulumi.runtime.call('example::Foo/generateKubeconfig', __args__, res=__self__, typ=Foo.GenerateKubeconfigResult)

