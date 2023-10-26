// GENERATED CODE -- DO NOT EDIT!

// package: pulumirpc
// file: pulumi/language.proto

import * as pulumi_language_pb from "./language_pb";
import * as pulumi_plugin_pb from "./plugin_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface ILanguageRuntimeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getRequiredPlugins: grpc.MethodDefinition<pulumi_language_pb.GetRequiredPluginsRequest, pulumi_language_pb.GetRequiredPluginsResponse>;
  run: grpc.MethodDefinition<pulumi_language_pb.RunRequest, pulumi_language_pb.RunResponse>;
  getPluginInfo: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, pulumi_plugin_pb.PluginInfo>;
  installDependencies: grpc.MethodDefinition<pulumi_language_pb.InstallDependenciesRequest, pulumi_language_pb.InstallDependenciesResponse>;
  about: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, pulumi_language_pb.AboutResponse>;
  getProgramDependencies: grpc.MethodDefinition<pulumi_language_pb.GetProgramDependenciesRequest, pulumi_language_pb.GetProgramDependenciesResponse>;
  runPlugin: grpc.MethodDefinition<pulumi_language_pb.RunPluginRequest, pulumi_language_pb.RunPluginResponse>;
  generateProgram: grpc.MethodDefinition<pulumi_language_pb.GenerateProgramRequest, pulumi_language_pb.GenerateProgramResponse>;
  generateProject: grpc.MethodDefinition<pulumi_language_pb.GenerateProjectRequest, pulumi_language_pb.GenerateProjectResponse>;
  generatePackage: grpc.MethodDefinition<pulumi_language_pb.GeneratePackageRequest, pulumi_language_pb.GeneratePackageResponse>;
  pack: grpc.MethodDefinition<pulumi_language_pb.PackRequest, pulumi_language_pb.PackResponse>;
}

export const LanguageRuntimeService: ILanguageRuntimeService;

export interface ILanguageRuntimeServer extends grpc.UntypedServiceImplementation {
  getRequiredPlugins: grpc.handleUnaryCall<pulumi_language_pb.GetRequiredPluginsRequest, pulumi_language_pb.GetRequiredPluginsResponse>;
  run: grpc.handleUnaryCall<pulumi_language_pb.RunRequest, pulumi_language_pb.RunResponse>;
  getPluginInfo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, pulumi_plugin_pb.PluginInfo>;
  installDependencies: grpc.handleServerStreamingCall<pulumi_language_pb.InstallDependenciesRequest, pulumi_language_pb.InstallDependenciesResponse>;
  about: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, pulumi_language_pb.AboutResponse>;
  getProgramDependencies: grpc.handleUnaryCall<pulumi_language_pb.GetProgramDependenciesRequest, pulumi_language_pb.GetProgramDependenciesResponse>;
  runPlugin: grpc.handleServerStreamingCall<pulumi_language_pb.RunPluginRequest, pulumi_language_pb.RunPluginResponse>;
  generateProgram: grpc.handleUnaryCall<pulumi_language_pb.GenerateProgramRequest, pulumi_language_pb.GenerateProgramResponse>;
  generateProject: grpc.handleUnaryCall<pulumi_language_pb.GenerateProjectRequest, pulumi_language_pb.GenerateProjectResponse>;
  generatePackage: grpc.handleUnaryCall<pulumi_language_pb.GeneratePackageRequest, pulumi_language_pb.GeneratePackageResponse>;
  pack: grpc.handleUnaryCall<pulumi_language_pb.PackRequest, pulumi_language_pb.PackResponse>;
}

export class LanguageRuntimeClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getRequiredPlugins(argument: pulumi_language_pb.GetRequiredPluginsRequest, callback: grpc.requestCallback<pulumi_language_pb.GetRequiredPluginsResponse>): grpc.ClientUnaryCall;
  getRequiredPlugins(argument: pulumi_language_pb.GetRequiredPluginsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.GetRequiredPluginsResponse>): grpc.ClientUnaryCall;
  getRequiredPlugins(argument: pulumi_language_pb.GetRequiredPluginsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.GetRequiredPluginsResponse>): grpc.ClientUnaryCall;
  run(argument: pulumi_language_pb.RunRequest, callback: grpc.requestCallback<pulumi_language_pb.RunResponse>): grpc.ClientUnaryCall;
  run(argument: pulumi_language_pb.RunRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.RunResponse>): grpc.ClientUnaryCall;
  run(argument: pulumi_language_pb.RunRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.RunResponse>): grpc.ClientUnaryCall;
  getPluginInfo(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<pulumi_plugin_pb.PluginInfo>): grpc.ClientUnaryCall;
  getPluginInfo(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_plugin_pb.PluginInfo>): grpc.ClientUnaryCall;
  getPluginInfo(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_plugin_pb.PluginInfo>): grpc.ClientUnaryCall;
  installDependencies(argument: pulumi_language_pb.InstallDependenciesRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<pulumi_language_pb.InstallDependenciesResponse>;
  installDependencies(argument: pulumi_language_pb.InstallDependenciesRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<pulumi_language_pb.InstallDependenciesResponse>;
  about(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<pulumi_language_pb.AboutResponse>): grpc.ClientUnaryCall;
  about(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.AboutResponse>): grpc.ClientUnaryCall;
  about(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.AboutResponse>): grpc.ClientUnaryCall;
  getProgramDependencies(argument: pulumi_language_pb.GetProgramDependenciesRequest, callback: grpc.requestCallback<pulumi_language_pb.GetProgramDependenciesResponse>): grpc.ClientUnaryCall;
  getProgramDependencies(argument: pulumi_language_pb.GetProgramDependenciesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.GetProgramDependenciesResponse>): grpc.ClientUnaryCall;
  getProgramDependencies(argument: pulumi_language_pb.GetProgramDependenciesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.GetProgramDependenciesResponse>): grpc.ClientUnaryCall;
  runPlugin(argument: pulumi_language_pb.RunPluginRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<pulumi_language_pb.RunPluginResponse>;
  runPlugin(argument: pulumi_language_pb.RunPluginRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<pulumi_language_pb.RunPluginResponse>;
  generateProgram(argument: pulumi_language_pb.GenerateProgramRequest, callback: grpc.requestCallback<pulumi_language_pb.GenerateProgramResponse>): grpc.ClientUnaryCall;
  generateProgram(argument: pulumi_language_pb.GenerateProgramRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.GenerateProgramResponse>): grpc.ClientUnaryCall;
  generateProgram(argument: pulumi_language_pb.GenerateProgramRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.GenerateProgramResponse>): grpc.ClientUnaryCall;
  generateProject(argument: pulumi_language_pb.GenerateProjectRequest, callback: grpc.requestCallback<pulumi_language_pb.GenerateProjectResponse>): grpc.ClientUnaryCall;
  generateProject(argument: pulumi_language_pb.GenerateProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.GenerateProjectResponse>): grpc.ClientUnaryCall;
  generateProject(argument: pulumi_language_pb.GenerateProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.GenerateProjectResponse>): grpc.ClientUnaryCall;
  generatePackage(argument: pulumi_language_pb.GeneratePackageRequest, callback: grpc.requestCallback<pulumi_language_pb.GeneratePackageResponse>): grpc.ClientUnaryCall;
  generatePackage(argument: pulumi_language_pb.GeneratePackageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.GeneratePackageResponse>): grpc.ClientUnaryCall;
  generatePackage(argument: pulumi_language_pb.GeneratePackageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.GeneratePackageResponse>): grpc.ClientUnaryCall;
  pack(argument: pulumi_language_pb.PackRequest, callback: grpc.requestCallback<pulumi_language_pb.PackResponse>): grpc.ClientUnaryCall;
  pack(argument: pulumi_language_pb.PackRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.PackResponse>): grpc.ClientUnaryCall;
  pack(argument: pulumi_language_pb.PackRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_language_pb.PackResponse>): grpc.ClientUnaryCall;
}
