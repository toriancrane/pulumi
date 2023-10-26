// GENERATED CODE -- DO NOT EDIT!

// package: codegen
// file: pulumi/codegen/loader.proto

import * as pulumi_codegen_loader_pb from "../../pulumi/codegen/loader_pb";
import * as grpc from "@grpc/grpc-js";

interface ILoaderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getSchema: grpc.MethodDefinition<pulumi_codegen_loader_pb.GetSchemaRequest, pulumi_codegen_loader_pb.GetSchemaResponse>;
}

export const LoaderService: ILoaderService;

export interface ILoaderServer extends grpc.UntypedServiceImplementation {
  getSchema: grpc.handleUnaryCall<pulumi_codegen_loader_pb.GetSchemaRequest, pulumi_codegen_loader_pb.GetSchemaResponse>;
}

export class LoaderClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getSchema(argument: pulumi_codegen_loader_pb.GetSchemaRequest, callback: grpc.requestCallback<pulumi_codegen_loader_pb.GetSchemaResponse>): grpc.ClientUnaryCall;
  getSchema(argument: pulumi_codegen_loader_pb.GetSchemaRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_codegen_loader_pb.GetSchemaResponse>): grpc.ClientUnaryCall;
  getSchema(argument: pulumi_codegen_loader_pb.GetSchemaRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_codegen_loader_pb.GetSchemaResponse>): grpc.ClientUnaryCall;
}
