// package: pulumirpc
// file: pulumi/language.proto

import * as jspb from "google-protobuf";
import * as pulumi_codegen_hcl_pb from "./codegen/hcl_pb";
import * as pulumi_plugin_pb from "./plugin_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class AboutResponse extends jspb.Message {
  getExecutable(): string;
  setExecutable(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AboutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AboutResponse): AboutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AboutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AboutResponse;
  static deserializeBinaryFromReader(message: AboutResponse, reader: jspb.BinaryReader): AboutResponse;
}

export namespace AboutResponse {
  export type AsObject = {
    executable: string,
    version: string,
    metadataMap: Array<[string, string]>,
  }
}

export class GetProgramDependenciesRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  getPwd(): string;
  setPwd(value: string): void;

  getProgram(): string;
  setProgram(value: string): void;

  getTransitivedependencies(): boolean;
  setTransitivedependencies(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProgramDependenciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProgramDependenciesRequest): GetProgramDependenciesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProgramDependenciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProgramDependenciesRequest;
  static deserializeBinaryFromReader(message: GetProgramDependenciesRequest, reader: jspb.BinaryReader): GetProgramDependenciesRequest;
}

export namespace GetProgramDependenciesRequest {
  export type AsObject = {
    project: string,
    pwd: string,
    program: string,
    transitivedependencies: boolean,
  }
}

export class DependencyInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DependencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DependencyInfo): DependencyInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DependencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DependencyInfo;
  static deserializeBinaryFromReader(message: DependencyInfo, reader: jspb.BinaryReader): DependencyInfo;
}

export namespace DependencyInfo {
  export type AsObject = {
    name: string,
    version: string,
  }
}

export class GetProgramDependenciesResponse extends jspb.Message {
  clearDependenciesList(): void;
  getDependenciesList(): Array<DependencyInfo>;
  setDependenciesList(value: Array<DependencyInfo>): void;
  addDependencies(value?: DependencyInfo, index?: number): DependencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProgramDependenciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProgramDependenciesResponse): GetProgramDependenciesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProgramDependenciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProgramDependenciesResponse;
  static deserializeBinaryFromReader(message: GetProgramDependenciesResponse, reader: jspb.BinaryReader): GetProgramDependenciesResponse;
}

export namespace GetProgramDependenciesResponse {
  export type AsObject = {
    dependenciesList: Array<DependencyInfo.AsObject>,
  }
}

export class GetRequiredPluginsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  getPwd(): string;
  setPwd(value: string): void;

  getProgram(): string;
  setProgram(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequiredPluginsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequiredPluginsRequest): GetRequiredPluginsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequiredPluginsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequiredPluginsRequest;
  static deserializeBinaryFromReader(message: GetRequiredPluginsRequest, reader: jspb.BinaryReader): GetRequiredPluginsRequest;
}

export namespace GetRequiredPluginsRequest {
  export type AsObject = {
    project: string,
    pwd: string,
    program: string,
  }
}

export class GetRequiredPluginsResponse extends jspb.Message {
  clearPluginsList(): void;
  getPluginsList(): Array<pulumi_plugin_pb.PluginDependency>;
  setPluginsList(value: Array<pulumi_plugin_pb.PluginDependency>): void;
  addPlugins(value?: pulumi_plugin_pb.PluginDependency, index?: number): pulumi_plugin_pb.PluginDependency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequiredPluginsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequiredPluginsResponse): GetRequiredPluginsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequiredPluginsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequiredPluginsResponse;
  static deserializeBinaryFromReader(message: GetRequiredPluginsResponse, reader: jspb.BinaryReader): GetRequiredPluginsResponse;
}

export namespace GetRequiredPluginsResponse {
  export type AsObject = {
    pluginsList: Array<pulumi_plugin_pb.PluginDependency.AsObject>,
  }
}

export class RunRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  getStack(): string;
  setStack(value: string): void;

  getPwd(): string;
  setPwd(value: string): void;

  getProgram(): string;
  setProgram(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  getConfigMap(): jspb.Map<string, string>;
  clearConfigMap(): void;
  getDryrun(): boolean;
  setDryrun(value: boolean): void;

  getParallel(): number;
  setParallel(value: number): void;

  getMonitorAddress(): string;
  setMonitorAddress(value: string): void;

  getQuerymode(): boolean;
  setQuerymode(value: boolean): void;

  clearConfigsecretkeysList(): void;
  getConfigsecretkeysList(): Array<string>;
  setConfigsecretkeysList(value: Array<string>): void;
  addConfigsecretkeys(value: string, index?: number): string;

  getOrganization(): string;
  setOrganization(value: string): void;

  hasConfigpropertymap(): boolean;
  clearConfigpropertymap(): void;
  getConfigpropertymap(): google_protobuf_struct_pb.Struct | undefined;
  setConfigpropertymap(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunRequest): RunRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunRequest;
  static deserializeBinaryFromReader(message: RunRequest, reader: jspb.BinaryReader): RunRequest;
}

export namespace RunRequest {
  export type AsObject = {
    project: string,
    stack: string,
    pwd: string,
    program: string,
    argsList: Array<string>,
    configMap: Array<[string, string]>,
    dryrun: boolean,
    parallel: number,
    monitorAddress: string,
    querymode: boolean,
    configsecretkeysList: Array<string>,
    organization: string,
    configpropertymap?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class RunResponse extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  getBail(): boolean;
  setBail(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunResponse): RunResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunResponse;
  static deserializeBinaryFromReader(message: RunResponse, reader: jspb.BinaryReader): RunResponse;
}

export namespace RunResponse {
  export type AsObject = {
    error: string,
    bail: boolean,
  }
}

export class InstallDependenciesRequest extends jspb.Message {
  getDirectory(): string;
  setDirectory(value: string): void;

  getIsTerminal(): boolean;
  setIsTerminal(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstallDependenciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstallDependenciesRequest): InstallDependenciesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstallDependenciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstallDependenciesRequest;
  static deserializeBinaryFromReader(message: InstallDependenciesRequest, reader: jspb.BinaryReader): InstallDependenciesRequest;
}

export namespace InstallDependenciesRequest {
  export type AsObject = {
    directory: string,
    isTerminal: boolean,
  }
}

export class InstallDependenciesResponse extends jspb.Message {
  getStdout(): Uint8Array | string;
  getStdout_asU8(): Uint8Array;
  getStdout_asB64(): string;
  setStdout(value: Uint8Array | string): void;

  getStderr(): Uint8Array | string;
  getStderr_asU8(): Uint8Array;
  getStderr_asB64(): string;
  setStderr(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstallDependenciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InstallDependenciesResponse): InstallDependenciesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstallDependenciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstallDependenciesResponse;
  static deserializeBinaryFromReader(message: InstallDependenciesResponse, reader: jspb.BinaryReader): InstallDependenciesResponse;
}

export namespace InstallDependenciesResponse {
  export type AsObject = {
    stdout: Uint8Array | string,
    stderr: Uint8Array | string,
  }
}

export class RunPluginRequest extends jspb.Message {
  getPwd(): string;
  setPwd(value: string): void;

  getProgram(): string;
  setProgram(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  clearEnvList(): void;
  getEnvList(): Array<string>;
  setEnvList(value: Array<string>): void;
  addEnv(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunPluginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunPluginRequest): RunPluginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunPluginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunPluginRequest;
  static deserializeBinaryFromReader(message: RunPluginRequest, reader: jspb.BinaryReader): RunPluginRequest;
}

export namespace RunPluginRequest {
  export type AsObject = {
    pwd: string,
    program: string,
    argsList: Array<string>,
    envList: Array<string>,
  }
}

export class RunPluginResponse extends jspb.Message {
  hasStdout(): boolean;
  clearStdout(): void;
  getStdout(): Uint8Array | string;
  getStdout_asU8(): Uint8Array;
  getStdout_asB64(): string;
  setStdout(value: Uint8Array | string): void;

  hasStderr(): boolean;
  clearStderr(): void;
  getStderr(): Uint8Array | string;
  getStderr_asU8(): Uint8Array;
  getStderr_asB64(): string;
  setStderr(value: Uint8Array | string): void;

  hasExitcode(): boolean;
  clearExitcode(): void;
  getExitcode(): number;
  setExitcode(value: number): void;

  getOutputCase(): RunPluginResponse.OutputCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunPluginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunPluginResponse): RunPluginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunPluginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunPluginResponse;
  static deserializeBinaryFromReader(message: RunPluginResponse, reader: jspb.BinaryReader): RunPluginResponse;
}

export namespace RunPluginResponse {
  export type AsObject = {
    stdout: Uint8Array | string,
    stderr: Uint8Array | string,
    exitcode: number,
  }

  export enum OutputCase {
    OUTPUT_NOT_SET = 0,
    STDOUT = 1,
    STDERR = 2,
    EXITCODE = 3,
  }
}

export class GenerateProgramRequest extends jspb.Message {
  getSourceMap(): jspb.Map<string, string>;
  clearSourceMap(): void;
  getLoaderTarget(): string;
  setLoaderTarget(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateProgramRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateProgramRequest): GenerateProgramRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateProgramRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateProgramRequest;
  static deserializeBinaryFromReader(message: GenerateProgramRequest, reader: jspb.BinaryReader): GenerateProgramRequest;
}

export namespace GenerateProgramRequest {
  export type AsObject = {
    sourceMap: Array<[string, string]>,
    loaderTarget: string,
  }
}

export class GenerateProgramResponse extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<pulumi_codegen_hcl_pb.Diagnostic>;
  setDiagnosticsList(value: Array<pulumi_codegen_hcl_pb.Diagnostic>): void;
  addDiagnostics(value?: pulumi_codegen_hcl_pb.Diagnostic, index?: number): pulumi_codegen_hcl_pb.Diagnostic;

  getSourceMap(): jspb.Map<string, Uint8Array | string>;
  clearSourceMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateProgramResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateProgramResponse): GenerateProgramResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateProgramResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateProgramResponse;
  static deserializeBinaryFromReader(message: GenerateProgramResponse, reader: jspb.BinaryReader): GenerateProgramResponse;
}

export namespace GenerateProgramResponse {
  export type AsObject = {
    diagnosticsList: Array<pulumi_codegen_hcl_pb.Diagnostic.AsObject>,
    sourceMap: Array<[string, Uint8Array | string]>,
  }
}

export class GenerateProjectRequest extends jspb.Message {
  getSourceDirectory(): string;
  setSourceDirectory(value: string): void;

  getTargetDirectory(): string;
  setTargetDirectory(value: string): void;

  getProject(): string;
  setProject(value: string): void;

  getStrict(): boolean;
  setStrict(value: boolean): void;

  getLoaderTarget(): string;
  setLoaderTarget(value: string): void;

  getLocalDependenciesMap(): jspb.Map<string, string>;
  clearLocalDependenciesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateProjectRequest): GenerateProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateProjectRequest;
  static deserializeBinaryFromReader(message: GenerateProjectRequest, reader: jspb.BinaryReader): GenerateProjectRequest;
}

export namespace GenerateProjectRequest {
  export type AsObject = {
    sourceDirectory: string,
    targetDirectory: string,
    project: string,
    strict: boolean,
    loaderTarget: string,
    localDependenciesMap: Array<[string, string]>,
  }
}

export class GenerateProjectResponse extends jspb.Message {
  clearDiagnosticsList(): void;
  getDiagnosticsList(): Array<pulumi_codegen_hcl_pb.Diagnostic>;
  setDiagnosticsList(value: Array<pulumi_codegen_hcl_pb.Diagnostic>): void;
  addDiagnostics(value?: pulumi_codegen_hcl_pb.Diagnostic, index?: number): pulumi_codegen_hcl_pb.Diagnostic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateProjectResponse): GenerateProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateProjectResponse;
  static deserializeBinaryFromReader(message: GenerateProjectResponse, reader: jspb.BinaryReader): GenerateProjectResponse;
}

export namespace GenerateProjectResponse {
  export type AsObject = {
    diagnosticsList: Array<pulumi_codegen_hcl_pb.Diagnostic.AsObject>,
  }
}

export class GeneratePackageRequest extends jspb.Message {
  getDirectory(): string;
  setDirectory(value: string): void;

  getSchema(): string;
  setSchema(value: string): void;

  getExtraFilesMap(): jspb.Map<string, Uint8Array | string>;
  clearExtraFilesMap(): void;
  getLoaderTarget(): string;
  setLoaderTarget(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePackageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePackageRequest): GeneratePackageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeneratePackageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePackageRequest;
  static deserializeBinaryFromReader(message: GeneratePackageRequest, reader: jspb.BinaryReader): GeneratePackageRequest;
}

export namespace GeneratePackageRequest {
  export type AsObject = {
    directory: string,
    schema: string,
    extraFilesMap: Array<[string, Uint8Array | string]>,
    loaderTarget: string,
  }
}

export class GeneratePackageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePackageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePackageResponse): GeneratePackageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeneratePackageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePackageResponse;
  static deserializeBinaryFromReader(message: GeneratePackageResponse, reader: jspb.BinaryReader): GeneratePackageResponse;
}

export namespace GeneratePackageResponse {
  export type AsObject = {
  }
}

export class PackRequest extends jspb.Message {
  getPackageDirectory(): string;
  setPackageDirectory(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getDestinationDirectory(): string;
  setDestinationDirectory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PackRequest): PackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackRequest;
  static deserializeBinaryFromReader(message: PackRequest, reader: jspb.BinaryReader): PackRequest;
}

export namespace PackRequest {
  export type AsObject = {
    packageDirectory: string,
    version: string,
    destinationDirectory: string,
  }
}

export class PackResponse extends jspb.Message {
  getArtifactPath(): string;
  setArtifactPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PackResponse): PackResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackResponse;
  static deserializeBinaryFromReader(message: PackResponse, reader: jspb.BinaryReader): PackResponse;
}

export namespace PackResponse {
  export type AsObject = {
    artifactPath: string,
  }
}

