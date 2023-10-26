// GENERATED CODE -- DO NOT EDIT!

// package: pulumirpc
// file: pulumi/analyzer.proto

import * as pulumi_analyzer_pb from "./analyzer_pb";
import * as pulumi_plugin_pb from "./plugin_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IAnalyzerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  analyze: grpc.MethodDefinition<pulumi_analyzer_pb.AnalyzeRequest, pulumi_analyzer_pb.AnalyzeResponse>;
  analyzeStack: grpc.MethodDefinition<pulumi_analyzer_pb.AnalyzeStackRequest, pulumi_analyzer_pb.AnalyzeResponse>;
  remediate: grpc.MethodDefinition<pulumi_analyzer_pb.AnalyzeRequest, pulumi_analyzer_pb.RemediateResponse>;
  getAnalyzerInfo: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, pulumi_analyzer_pb.AnalyzerInfo>;
  getPluginInfo: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, pulumi_plugin_pb.PluginInfo>;
  configure: grpc.MethodDefinition<pulumi_analyzer_pb.ConfigureAnalyzerRequest, google_protobuf_empty_pb.Empty>;
}

export const AnalyzerService: IAnalyzerService;

export interface IAnalyzerServer extends grpc.UntypedServiceImplementation {
  analyze: grpc.handleUnaryCall<pulumi_analyzer_pb.AnalyzeRequest, pulumi_analyzer_pb.AnalyzeResponse>;
  analyzeStack: grpc.handleUnaryCall<pulumi_analyzer_pb.AnalyzeStackRequest, pulumi_analyzer_pb.AnalyzeResponse>;
  remediate: grpc.handleUnaryCall<pulumi_analyzer_pb.AnalyzeRequest, pulumi_analyzer_pb.RemediateResponse>;
  getAnalyzerInfo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, pulumi_analyzer_pb.AnalyzerInfo>;
  getPluginInfo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, pulumi_plugin_pb.PluginInfo>;
  configure: grpc.handleUnaryCall<pulumi_analyzer_pb.ConfigureAnalyzerRequest, google_protobuf_empty_pb.Empty>;
}

export class AnalyzerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  analyze(argument: pulumi_analyzer_pb.AnalyzeRequest, callback: grpc.requestCallback<pulumi_analyzer_pb.AnalyzeResponse>): grpc.ClientUnaryCall;
  analyze(argument: pulumi_analyzer_pb.AnalyzeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_analyzer_pb.AnalyzeResponse>): grpc.ClientUnaryCall;
  analyze(argument: pulumi_analyzer_pb.AnalyzeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_analyzer_pb.AnalyzeResponse>): grpc.ClientUnaryCall;
  analyzeStack(argument: pulumi_analyzer_pb.AnalyzeStackRequest, callback: grpc.requestCallback<pulumi_analyzer_pb.AnalyzeResponse>): grpc.ClientUnaryCall;
  analyzeStack(argument: pulumi_analyzer_pb.AnalyzeStackRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_analyzer_pb.AnalyzeResponse>): grpc.ClientUnaryCall;
  analyzeStack(argument: pulumi_analyzer_pb.AnalyzeStackRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_analyzer_pb.AnalyzeResponse>): grpc.ClientUnaryCall;
  remediate(argument: pulumi_analyzer_pb.AnalyzeRequest, callback: grpc.requestCallback<pulumi_analyzer_pb.RemediateResponse>): grpc.ClientUnaryCall;
  remediate(argument: pulumi_analyzer_pb.AnalyzeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_analyzer_pb.RemediateResponse>): grpc.ClientUnaryCall;
  remediate(argument: pulumi_analyzer_pb.AnalyzeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_analyzer_pb.RemediateResponse>): grpc.ClientUnaryCall;
  getAnalyzerInfo(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<pulumi_analyzer_pb.AnalyzerInfo>): grpc.ClientUnaryCall;
  getAnalyzerInfo(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_analyzer_pb.AnalyzerInfo>): grpc.ClientUnaryCall;
  getAnalyzerInfo(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_analyzer_pb.AnalyzerInfo>): grpc.ClientUnaryCall;
  getPluginInfo(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<pulumi_plugin_pb.PluginInfo>): grpc.ClientUnaryCall;
  getPluginInfo(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_plugin_pb.PluginInfo>): grpc.ClientUnaryCall;
  getPluginInfo(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_plugin_pb.PluginInfo>): grpc.ClientUnaryCall;
  configure(argument: pulumi_analyzer_pb.ConfigureAnalyzerRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  configure(argument: pulumi_analyzer_pb.ConfigureAnalyzerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  configure(argument: pulumi_analyzer_pb.ConfigureAnalyzerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
