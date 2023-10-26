// package: pulumirpc
// file: pulumi/converter.proto

import * as jspb from "google-protobuf";
import * as pulumi_codegen_hcl_pb from "./codegen/hcl_pb";
import * as pulumi_plugin_pb from "./plugin_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class ConvertStateRequest extends jspb.Message {
  getMapperTarget(): string;
  setMapperTarget(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertStateRequest): ConvertStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConvertStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertStateRequest;
  static deserializeBinaryFromReader(message: ConvertStateRequest, reader: jspb.BinaryReader): ConvertStateRequest;
}

export namespace ConvertStateRequest {
  export type AsObject = {
    mapperTarget: string,
    argsList: Array<string>,
  }
}

export class ResourceImport extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getPlugindownloadurl(): string;
  setPlugindownloadurl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceImport.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceImport): ResourceImport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceImport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceImport;
  static deserializeBinaryFromReader(message: ResourceImport, reader: jspb.BinaryReader): ResourceImport;
}

export namespace ResourceImport {
  export type AsObject = {
    type: string,
    name: string,
    id: string,
    version: string,
    plugindownloadurl: string,
  }
}

export class ConvertStateResponse extends jspb.Message {
  clearResourcesList(): void;
  getResourcesList(): Array<ResourceImport>;
  setResourcesList(value: Array<ResourceImport>): void;
  addResources(value?: ResourceImport, index?: number): ResourceImport;

  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<pulumi_codegen_hcl_pb.Diagnostic>;
  setDiagnosticsList(value: Array<pulumi_codegen_hcl_pb.Diagnostic>): void;
  addDiagnostics(value?: pulumi_codegen_hcl_pb.Diagnostic, index?: number): pulumi_codegen_hcl_pb.Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertStateResponse): ConvertStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConvertStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertStateResponse;
  static deserializeBinaryFromReader(message: ConvertStateResponse, reader: jspb.BinaryReader): ConvertStateResponse;
}

export namespace ConvertStateResponse {
  export type AsObject = {
    resourcesList: Array<ResourceImport.AsObject>,
    diagnosticsList: Array<pulumi_codegen_hcl_pb.Diagnostic.AsObject>,
  }
}

export class ConvertProgramRequest extends jspb.Message {
  getSourceDirectory(): string;
  setSourceDirectory(value: string): void;

  getTargetDirectory(): string;
  setTargetDirectory(value: string): void;

  getMapperTarget(): string;
  setMapperTarget(value: string): void;

  getLoaderTarget(): string;
  setLoaderTarget(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertProgramRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertProgramRequest): ConvertProgramRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConvertProgramRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertProgramRequest;
  static deserializeBinaryFromReader(message: ConvertProgramRequest, reader: jspb.BinaryReader): ConvertProgramRequest;
}

export namespace ConvertProgramRequest {
  export type AsObject = {
    sourceDirectory: string,
    targetDirectory: string,
    mapperTarget: string,
    loaderTarget: string,
    argsList: Array<string>,
  }
}

export class ConvertProgramResponse extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<pulumi_codegen_hcl_pb.Diagnostic>;
  setDiagnosticsList(value: Array<pulumi_codegen_hcl_pb.Diagnostic>): void;
  addDiagnostics(value?: pulumi_codegen_hcl_pb.Diagnostic, index?: number): pulumi_codegen_hcl_pb.Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertProgramResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertProgramResponse): ConvertProgramResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConvertProgramResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertProgramResponse;
  static deserializeBinaryFromReader(message: ConvertProgramResponse, reader: jspb.BinaryReader): ConvertProgramResponse;
}

export namespace ConvertProgramResponse {
  export type AsObject = {
    diagnosticsList: Array<pulumi_codegen_hcl_pb.Diagnostic.AsObject>,
  }
}

