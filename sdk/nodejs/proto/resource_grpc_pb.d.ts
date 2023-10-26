// GENERATED CODE -- DO NOT EDIT!

// package: pulumirpc
// file: pulumi/resource.proto

import * as pulumi_resource_pb from "./resource_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as pulumi_provider_pb from "./provider_pb";
import * as grpc from "@grpc/grpc-js";

interface IResourceMonitorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  supportsFeature: grpc.MethodDefinition<pulumi_resource_pb.SupportsFeatureRequest, pulumi_resource_pb.SupportsFeatureResponse>;
  invoke: grpc.MethodDefinition<pulumi_resource_pb.ResourceInvokeRequest, pulumi_provider_pb.InvokeResponse>;
  streamInvoke: grpc.MethodDefinition<pulumi_resource_pb.ResourceInvokeRequest, pulumi_provider_pb.InvokeResponse>;
  call: grpc.MethodDefinition<pulumi_provider_pb.CallRequest, pulumi_provider_pb.CallResponse>;
  readResource: grpc.MethodDefinition<pulumi_resource_pb.ReadResourceRequest, pulumi_resource_pb.ReadResourceResponse>;
  registerResource: grpc.MethodDefinition<pulumi_resource_pb.RegisterResourceRequest, pulumi_resource_pb.RegisterResourceResponse>;
  registerResourceOutputs: grpc.MethodDefinition<pulumi_resource_pb.RegisterResourceOutputsRequest, google_protobuf_empty_pb.Empty>;
}

export const ResourceMonitorService: IResourceMonitorService;

export interface IResourceMonitorServer extends grpc.UntypedServiceImplementation {
  supportsFeature: grpc.handleUnaryCall<pulumi_resource_pb.SupportsFeatureRequest, pulumi_resource_pb.SupportsFeatureResponse>;
  invoke: grpc.handleUnaryCall<pulumi_resource_pb.ResourceInvokeRequest, pulumi_provider_pb.InvokeResponse>;
  streamInvoke: grpc.handleServerStreamingCall<pulumi_resource_pb.ResourceInvokeRequest, pulumi_provider_pb.InvokeResponse>;
  call: grpc.handleUnaryCall<pulumi_provider_pb.CallRequest, pulumi_provider_pb.CallResponse>;
  readResource: grpc.handleUnaryCall<pulumi_resource_pb.ReadResourceRequest, pulumi_resource_pb.ReadResourceResponse>;
  registerResource: grpc.handleUnaryCall<pulumi_resource_pb.RegisterResourceRequest, pulumi_resource_pb.RegisterResourceResponse>;
  registerResourceOutputs: grpc.handleUnaryCall<pulumi_resource_pb.RegisterResourceOutputsRequest, google_protobuf_empty_pb.Empty>;
}

export class ResourceMonitorClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  supportsFeature(argument: pulumi_resource_pb.SupportsFeatureRequest, callback: grpc.requestCallback<pulumi_resource_pb.SupportsFeatureResponse>): grpc.ClientUnaryCall;
  supportsFeature(argument: pulumi_resource_pb.SupportsFeatureRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_resource_pb.SupportsFeatureResponse>): grpc.ClientUnaryCall;
  supportsFeature(argument: pulumi_resource_pb.SupportsFeatureRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_resource_pb.SupportsFeatureResponse>): grpc.ClientUnaryCall;
  invoke(argument: pulumi_resource_pb.ResourceInvokeRequest, callback: grpc.requestCallback<pulumi_provider_pb.InvokeResponse>): grpc.ClientUnaryCall;
  invoke(argument: pulumi_resource_pb.ResourceInvokeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.InvokeResponse>): grpc.ClientUnaryCall;
  invoke(argument: pulumi_resource_pb.ResourceInvokeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.InvokeResponse>): grpc.ClientUnaryCall;
  streamInvoke(argument: pulumi_resource_pb.ResourceInvokeRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<pulumi_provider_pb.InvokeResponse>;
  streamInvoke(argument: pulumi_resource_pb.ResourceInvokeRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<pulumi_provider_pb.InvokeResponse>;
  call(argument: pulumi_provider_pb.CallRequest, callback: grpc.requestCallback<pulumi_provider_pb.CallResponse>): grpc.ClientUnaryCall;
  call(argument: pulumi_provider_pb.CallRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.CallResponse>): grpc.ClientUnaryCall;
  call(argument: pulumi_provider_pb.CallRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_provider_pb.CallResponse>): grpc.ClientUnaryCall;
  readResource(argument: pulumi_resource_pb.ReadResourceRequest, callback: grpc.requestCallback<pulumi_resource_pb.ReadResourceResponse>): grpc.ClientUnaryCall;
  readResource(argument: pulumi_resource_pb.ReadResourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_resource_pb.ReadResourceResponse>): grpc.ClientUnaryCall;
  readResource(argument: pulumi_resource_pb.ReadResourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_resource_pb.ReadResourceResponse>): grpc.ClientUnaryCall;
  registerResource(argument: pulumi_resource_pb.RegisterResourceRequest, callback: grpc.requestCallback<pulumi_resource_pb.RegisterResourceResponse>): grpc.ClientUnaryCall;
  registerResource(argument: pulumi_resource_pb.RegisterResourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_resource_pb.RegisterResourceResponse>): grpc.ClientUnaryCall;
  registerResource(argument: pulumi_resource_pb.RegisterResourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_resource_pb.RegisterResourceResponse>): grpc.ClientUnaryCall;
  registerResourceOutputs(argument: pulumi_resource_pb.RegisterResourceOutputsRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  registerResourceOutputs(argument: pulumi_resource_pb.RegisterResourceOutputsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  registerResourceOutputs(argument: pulumi_resource_pb.RegisterResourceOutputsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
