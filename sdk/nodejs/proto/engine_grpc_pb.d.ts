// GENERATED CODE -- DO NOT EDIT!

// package: pulumirpc
// file: pulumi/engine.proto

import * as pulumi_engine_pb from "./engine_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IEngineService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  log: grpc.MethodDefinition<pulumi_engine_pb.LogRequest, google_protobuf_empty_pb.Empty>;
  getRootResource: grpc.MethodDefinition<pulumi_engine_pb.GetRootResourceRequest, pulumi_engine_pb.GetRootResourceResponse>;
  setRootResource: grpc.MethodDefinition<pulumi_engine_pb.SetRootResourceRequest, pulumi_engine_pb.SetRootResourceResponse>;
}

export const EngineService: IEngineService;

export interface IEngineServer extends grpc.UntypedServiceImplementation {
  log: grpc.handleUnaryCall<pulumi_engine_pb.LogRequest, google_protobuf_empty_pb.Empty>;
  getRootResource: grpc.handleUnaryCall<pulumi_engine_pb.GetRootResourceRequest, pulumi_engine_pb.GetRootResourceResponse>;
  setRootResource: grpc.handleUnaryCall<pulumi_engine_pb.SetRootResourceRequest, pulumi_engine_pb.SetRootResourceResponse>;
}

export class EngineClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  log(argument: pulumi_engine_pb.LogRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  log(argument: pulumi_engine_pb.LogRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  log(argument: pulumi_engine_pb.LogRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getRootResource(argument: pulumi_engine_pb.GetRootResourceRequest, callback: grpc.requestCallback<pulumi_engine_pb.GetRootResourceResponse>): grpc.ClientUnaryCall;
  getRootResource(argument: pulumi_engine_pb.GetRootResourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_engine_pb.GetRootResourceResponse>): grpc.ClientUnaryCall;
  getRootResource(argument: pulumi_engine_pb.GetRootResourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_engine_pb.GetRootResourceResponse>): grpc.ClientUnaryCall;
  setRootResource(argument: pulumi_engine_pb.SetRootResourceRequest, callback: grpc.requestCallback<pulumi_engine_pb.SetRootResourceResponse>): grpc.ClientUnaryCall;
  setRootResource(argument: pulumi_engine_pb.SetRootResourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_engine_pb.SetRootResourceResponse>): grpc.ClientUnaryCall;
  setRootResource(argument: pulumi_engine_pb.SetRootResourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_engine_pb.SetRootResourceResponse>): grpc.ClientUnaryCall;
}
