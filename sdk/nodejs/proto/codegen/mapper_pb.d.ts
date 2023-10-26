// package: codegen
// file: pulumi/codegen/mapper.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetMappingRequest extends jspb.Message {
  getProvider(): string;
  setProvider(value: string): void;

  getPulumiProvider(): string;
  setPulumiProvider(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMappingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMappingRequest): GetMappingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMappingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMappingRequest;
  static deserializeBinaryFromReader(message: GetMappingRequest, reader: jspb.BinaryReader): GetMappingRequest;
}

export namespace GetMappingRequest {
  export type AsObject = {
    provider: string,
    pulumiProvider: string,
  }
}

export class GetMappingResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMappingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMappingResponse): GetMappingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMappingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMappingResponse;
  static deserializeBinaryFromReader(message: GetMappingResponse, reader: jspb.BinaryReader): GetMappingResponse;
}

export namespace GetMappingResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

