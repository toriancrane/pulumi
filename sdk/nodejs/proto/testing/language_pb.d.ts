// package: pulumirpc.testing
// file: pulumi/testing/language.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetLanguageTestsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLanguageTestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLanguageTestsRequest): GetLanguageTestsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLanguageTestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLanguageTestsRequest;
  static deserializeBinaryFromReader(message: GetLanguageTestsRequest, reader: jspb.BinaryReader): GetLanguageTestsRequest;
}

export namespace GetLanguageTestsRequest {
  export type AsObject = {
  }
}

export class GetLanguageTestsResponse extends jspb.Message {
  clearTestsList(): void;
  getTestsList(): Array<string>;
  setTestsList(value: Array<string>): void;
  addTests(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLanguageTestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLanguageTestsResponse): GetLanguageTestsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLanguageTestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLanguageTestsResponse;
  static deserializeBinaryFromReader(message: GetLanguageTestsResponse, reader: jspb.BinaryReader): GetLanguageTestsResponse;
}

export namespace GetLanguageTestsResponse {
  export type AsObject = {
    testsList: Array<string>,
  }
}

export class PrepareLanguageTestsRequest extends jspb.Message {
  getLanguagePluginName(): string;
  setLanguagePluginName(value: string): void;

  getLanguagePluginTarget(): string;
  setLanguagePluginTarget(value: string): void;

  getSnapshotDirectory(): string;
  setSnapshotDirectory(value: string): void;

  getTemporaryDirectory(): string;
  setTemporaryDirectory(value: string): void;

  getCoreSdkDirectory(): string;
  setCoreSdkDirectory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareLanguageTestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareLanguageTestsRequest): PrepareLanguageTestsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareLanguageTestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareLanguageTestsRequest;
  static deserializeBinaryFromReader(message: PrepareLanguageTestsRequest, reader: jspb.BinaryReader): PrepareLanguageTestsRequest;
}

export namespace PrepareLanguageTestsRequest {
  export type AsObject = {
    languagePluginName: string,
    languagePluginTarget: string,
    snapshotDirectory: string,
    temporaryDirectory: string,
    coreSdkDirectory: string,
  }
}

export class PrepareLanguageTestsResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareLanguageTestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareLanguageTestsResponse): PrepareLanguageTestsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareLanguageTestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareLanguageTestsResponse;
  static deserializeBinaryFromReader(message: PrepareLanguageTestsResponse, reader: jspb.BinaryReader): PrepareLanguageTestsResponse;
}

export namespace PrepareLanguageTestsResponse {
  export type AsObject = {
    token: string,
  }
}

export class RunLanguageTestRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getTest(): string;
  setTest(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunLanguageTestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunLanguageTestRequest): RunLanguageTestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunLanguageTestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunLanguageTestRequest;
  static deserializeBinaryFromReader(message: RunLanguageTestRequest, reader: jspb.BinaryReader): RunLanguageTestRequest;
}

export namespace RunLanguageTestRequest {
  export type AsObject = {
    token: string,
    test: string,
  }
}

export class RunLanguageTestResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearMessagesList(): void;
  getMessagesList(): Array<string>;
  setMessagesList(value: Array<string>): void;
  addMessages(value: string, index?: number): string;

  getStdout(): string;
  setStdout(value: string): void;

  getStderr(): string;
  setStderr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunLanguageTestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunLanguageTestResponse): RunLanguageTestResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunLanguageTestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunLanguageTestResponse;
  static deserializeBinaryFromReader(message: RunLanguageTestResponse, reader: jspb.BinaryReader): RunLanguageTestResponse;
}

export namespace RunLanguageTestResponse {
  export type AsObject = {
    success: boolean,
    messagesList: Array<string>,
    stdout: string,
    stderr: string,
  }
}

