// GENERATED CODE -- DO NOT EDIT!

// package: pulumirpc
// file: pulumi/provider.proto

import * as pulumi_provider_pb from "./provider_pb";
import * as pulumi_plugin_pb from "./plugin_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IResourceProviderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getSchema: grpc.MethodDefinition<pulumi_provider_pb.GetSchemaRequest, pulumi_provider_pb.GetSchemaResponse>;
  checkConfig: grpc.MethodDefinition<pulumi_provider_pb.CheckRequest, pulumi_provider_pb.CheckResponse>;
  diffConfig: grpc.MethodDefinition<pulumi_provider_pb.DiffRequest, pulumi_provider_pb.DiffResponse>;
  configure: grpc.MethodDefinition<pulumi_provider_pb.ConfigureRequest, pulumi_provider_pb.ConfigureResponse>;
  invoke: grpc.MethodDefinition<pulumi_provider_pb.InvokeRequest, pulumi_provider_pb.InvokeResponse>;
  streamInvoke: grpc.MethodDefinition<pulumi_provider_pb.InvokeRequest, pulumi_provider_pb.InvokeResponse>;
  call: grpc.MethodDefinition<pulumi_provider_pb.CallRequest, pulumi_provider_pb.CallResponse>;
  check: grpc.MethodDefinition<pulumi_provider_pb.CheckRequest, pulumi_provider_pb.CheckResponse>;
  diff: grpc.MethodDefinition<pulumi_provider_pb.DiffRequest, pulumi_provider_pb.DiffResponse>;
  create: grpc.MethodDefinition<pulumi_provider_pb.CreateRequest, pulumi_provider_pb.CreateResponse>;
  read: grpc.MethodDefinition<pulumi_provider_pb.ReadRequest, pulumi_provider_pb.ReadResponse>;
  update: grpc.MethodDefinition<pulumi_provider_pb.UpdateRequest, pulumi_provider_pb.UpdateResponse>;
  delete: grpc.MethodDefinition<pulumi_provider_pb.DeleteRequest, google_protobuf_empty_pb.Empty>;
  construct: grpc.MethodDefinition<pulumi_provider_pb.ConstructRequest, pulumi_provider_pb.ConstructResponse>;
  cancel: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
  getPluginInfo: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, pulumi_plugin_pb.PluginInfo>;
  attach: grpc.MethodDefinition<pulumi_plugin_pb.PluginAttach, google_protobuf_empty_pb.Empty>;
  getMapping: grpc.MethodDefinition<pulumi_provider_pb.GetMappingRequest, pulumi_provider_pb.GetMappingResponse>;
  getMappings: grpc.MethodDefinition<pulumi_provider_pb.GetMappingsRequest, pulumi_provider_pb.GetMappingsResponse>;
}

export const ResourceProviderService: IResourceProviderService;

export interface IResourceProviderServer extends grpc.UntypedServiceImplementation {
  getSchema: grpc.handleUnaryCall<pulumi_provider_pb.GetSchemaRequest, pulumi_provider_pb.GetSchemaResponse>;
  checkConfig: grpc.handleUnaryCall<pulumi_provider_pb.CheckRequest, pulumi_provider_pb.CheckResponse>;
  diffConfig: grpc.handleUnaryCall<pulumi_provider_pb.DiffRequest, pulumi_provider_pb.DiffResponse>;
  configure: grpc.handleUnaryCall<pulumi_provider_pb.ConfigureRequest, pulumi_provider_pb.ConfigureResponse>;
  invoke: grpc.handleUnaryCall<pulumi_provider_pb.InvokeRequest, pulumi_provider_pb.InvokeResponse>;
  streamInvoke: grpc.handleServerStreamingCall<pulumi_provider_pb.InvokeRequest, pulumi_provider_pb.InvokeResponse>;
  call: grpc.handleUnaryCall<pulumi_provider_pb.CallRequest, pulumi_provider_pb.CallResponse>;
  check: grpc.handleUnaryCall<pulumi_provider_pb.CheckRequest, pulumi_provider_pb.CheckResponse>;
  diff: grpc.handleUnaryCall<pulumi_provider_pb.DiffRequest, pulumi_provider_pb.DiffResponse>;
  create: grpc.handleUnaryCall<pulumi_provider_pb.CreateRequest, pulumi_provider_pb.CreateResponse>;
  read: grpc.handleUnaryCall<pulumi_provider_pb.ReadRequest, pulumi_provider_pb.ReadResponse>;
  update: grpc.handleUnaryCall<pulumi_provider_pb.UpdateRequest, pulumi_provider_pb.UpdateResponse>;
  delete: grpc.handleUnaryCall<pulumi_provider_pb.DeleteRequest, google_protobuf_empty_pb.Empty>;
  construct: grpc.handleUnaryCall<pulumi_provider_pb.ConstructRequest, pulumi_provider_pb.ConstructResponse>;
  cancel: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
  getPluginInfo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, pulumi_plugin_pb.PluginInfo>;
  attach: grpc.handleUnaryCall<pulumi_plugin_pb.PluginAttach, google_protobuf_empty_pb.Empty>;
  getMapping: grpc.handleUnaryCall<pulumi_provider_pb.GetMappingRequest, pulumi_provider_pb.GetMappingResponse>;
  getMappings: grpc.handleUnaryCall<pulumi_provider_pb.GetMappingsRequest, pulumi_provider_pb.GetMappingsResponse>;
}

export class ResourceProviderClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getSchema(argument: pulumi_provider_pb.GetSchemaRequest, callback: grpc.requestCallback<pulumi_provider_pb.GetSchemaResponse>): grpc.ClientUnaryCall;
  getSchema(argument: pulumi_provider_pb.GetSchemaRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.GetSchemaResponse>): grpc.ClientUnaryCall;
  getSchema(argument: pulumi_provider_pb.GetSchemaRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.GetSchemaResponse>): grpc.ClientUnaryCall;
  checkConfig(argument: pulumi_provider_pb.CheckRequest, callback: grpc.requestCallback<pulumi_provider_pb.CheckResponse>): grpc.ClientUnaryCall;
  checkConfig(argument: pulumi_provider_pb.CheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.CheckResponse>): grpc.ClientUnaryCall;
  checkConfig(argument: pulumi_provider_pb.CheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.CheckResponse>): grpc.ClientUnaryCall;
  diffConfig(argument: pulumi_provider_pb.DiffRequest, callback: grpc.requestCallback<pulumi_provider_pb.DiffResponse>): grpc.ClientUnaryCall;
  diffConfig(argument: pulumi_provider_pb.DiffRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.DiffResponse>): grpc.ClientUnaryCall;
  diffConfig(argument: pulumi_provider_pb.DiffRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.DiffResponse>): grpc.ClientUnaryCall;
  configure(argument: pulumi_provider_pb.ConfigureRequest, callback: grpc.requestCallback<pulumi_provider_pb.ConfigureResponse>): grpc.ClientUnaryCall;
  configure(argument: pulumi_provider_pb.ConfigureRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.ConfigureResponse>): grpc.ClientUnaryCall;
  configure(argument: pulumi_provider_pb.ConfigureRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.ConfigureResponse>): grpc.ClientUnaryCall;
  invoke(argument: pulumi_provider_pb.InvokeRequest, callback: grpc.requestCallback<pulumi_provider_pb.InvokeResponse>): grpc.ClientUnaryCall;
  invoke(argument: pulumi_provider_pb.InvokeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.InvokeResponse>): grpc.ClientUnaryCall;
  invoke(argument: pulumi_provider_pb.InvokeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.InvokeResponse>): grpc.ClientUnaryCall;
  streamInvoke(argument: pulumi_provider_pb.InvokeRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<pulumi_provider_pb.InvokeResponse>;
  streamInvoke(argument: pulumi_provider_pb.InvokeRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<pulumi_provider_pb.InvokeResponse>;
  call(argument: pulumi_provider_pb.CallRequest, callback: grpc.requestCallback<pulumi_provider_pb.CallResponse>): grpc.ClientUnaryCall;
  call(argument: pulumi_provider_pb.CallRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.CallResponse>): grpc.ClientUnaryCall;
  call(argument: pulumi_provider_pb.CallRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.CallResponse>): grpc.ClientUnaryCall;
  check(argument: pulumi_provider_pb.CheckRequest, callback: grpc.requestCallback<pulumi_provider_pb.CheckResponse>): grpc.ClientUnaryCall;
  check(argument: pulumi_provider_pb.CheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.CheckResponse>): grpc.ClientUnaryCall;
  check(argument: pulumi_provider_pb.CheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.CheckResponse>): grpc.ClientUnaryCall;
  diff(argument: pulumi_provider_pb.DiffRequest, callback: grpc.requestCallback<pulumi_provider_pb.DiffResponse>): grpc.ClientUnaryCall;
  diff(argument: pulumi_provider_pb.DiffRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.DiffResponse>): grpc.ClientUnaryCall;
  diff(argument: pulumi_provider_pb.DiffRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.DiffResponse>): grpc.ClientUnaryCall;
  create(argument: pulumi_provider_pb.CreateRequest, callback: grpc.requestCallback<pulumi_provider_pb.CreateResponse>): grpc.ClientUnaryCall;
  create(argument: pulumi_provider_pb.CreateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.CreateResponse>): grpc.ClientUnaryCall;
  create(argument: pulumi_provider_pb.CreateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.CreateResponse>): grpc.ClientUnaryCall;
  read(argument: pulumi_provider_pb.ReadRequest, callback: grpc.requestCallback<pulumi_provider_pb.ReadResponse>): grpc.ClientUnaryCall;
  read(argument: pulumi_provider_pb.ReadRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.ReadResponse>): grpc.ClientUnaryCall;
  read(argument: pulumi_provider_pb.ReadRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.ReadResponse>): grpc.ClientUnaryCall;
  update(argument: pulumi_provider_pb.UpdateRequest, callback: grpc.requestCallback<pulumi_provider_pb.UpdateResponse>): grpc.ClientUnaryCall;
  update(argument: pulumi_provider_pb.UpdateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.UpdateResponse>): grpc.ClientUnaryCall;
  update(argument: pulumi_provider_pb.UpdateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.UpdateResponse>): grpc.ClientUnaryCall;
  delete(argument: pulumi_provider_pb.DeleteRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: pulumi_provider_pb.DeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: pulumi_provider_pb.DeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  construct(argument: pulumi_provider_pb.ConstructRequest, callback: grpc.requestCallback<pulumi_provider_pb.ConstructResponse>): grpc.ClientUnaryCall;
  construct(argument: pulumi_provider_pb.ConstructRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.ConstructResponse>): grpc.ClientUnaryCall;
  construct(argument: pulumi_provider_pb.ConstructRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.ConstructResponse>): grpc.ClientUnaryCall;
  cancel(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  cancel(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  cancel(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getPluginInfo(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<pulumi_plugin_pb.PluginInfo>): grpc.ClientUnaryCall;
  getPluginInfo(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_plugin_pb.PluginInfo>): grpc.ClientUnaryCall;
  getPluginInfo(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_plugin_pb.PluginInfo>): grpc.ClientUnaryCall;
  attach(argument: pulumi_plugin_pb.PluginAttach, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  attach(argument: pulumi_plugin_pb.PluginAttach, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  attach(argument: pulumi_plugin_pb.PluginAttach, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getMapping(argument: pulumi_provider_pb.GetMappingRequest, callback: grpc.requestCallback<pulumi_provider_pb.GetMappingResponse>): grpc.ClientUnaryCall;
  getMapping(argument: pulumi_provider_pb.GetMappingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.GetMappingResponse>): grpc.ClientUnaryCall;
  getMapping(argument: pulumi_provider_pb.GetMappingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.GetMappingResponse>): grpc.ClientUnaryCall;
  getMappings(argument: pulumi_provider_pb.GetMappingsRequest, callback: grpc.requestCallback<pulumi_provider_pb.GetMappingsResponse>): grpc.ClientUnaryCall;
  getMappings(argument: pulumi_provider_pb.GetMappingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.GetMappingsResponse>): grpc.ClientUnaryCall;
  getMappings(argument: pulumi_provider_pb.GetMappingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.GetMappingsResponse>): grpc.ClientUnaryCall;
}
