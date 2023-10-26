// GENERATED CODE -- DO NOT EDIT!

// package: pulumirpc
// file: pulumi/converter.proto

import * as pulumi_converter_pb from "./converter_pb";
import * as grpc from "@grpc/grpc-js";

interface IConverterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  convertState: grpc.MethodDefinition<pulumi_converter_pb.ConvertStateRequest, pulumi_converter_pb.ConvertStateResponse>;
  convertProgram: grpc.MethodDefinition<pulumi_converter_pb.ConvertProgramRequest, pulumi_converter_pb.ConvertProgramResponse>;
}

export const ConverterService: IConverterService;

export interface IConverterServer extends grpc.UntypedServiceImplementation {
  convertState: grpc.handleUnaryCall<pulumi_converter_pb.ConvertStateRequest, pulumi_converter_pb.ConvertStateResponse>;
  convertProgram: grpc.handleUnaryCall<pulumi_converter_pb.ConvertProgramRequest, pulumi_converter_pb.ConvertProgramResponse>;
}

export class ConverterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  convertState(argument: pulumi_converter_pb.ConvertStateRequest, callback: grpc.requestCallback<pulumi_converter_pb.ConvertStateResponse>): grpc.ClientUnaryCall;
  convertState(argument: pulumi_converter_pb.ConvertStateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_converter_pb.ConvertStateResponse>): grpc.ClientUnaryCall;
  convertState(argument: pulumi_converter_pb.ConvertStateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_converter_pb.ConvertStateResponse>): grpc.ClientUnaryCall;
  convertProgram(argument: pulumi_converter_pb.ConvertProgramRequest, callback: grpc.requestCallback<pulumi_converter_pb.ConvertProgramResponse>): grpc.ClientUnaryCall;
  convertProgram(argument: pulumi_converter_pb.ConvertProgramRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_converter_pb.ConvertProgramResponse>): grpc.ClientUnaryCall;
  convertProgram(argument: pulumi_converter_pb.ConvertProgramRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_converter_pb.ConvertProgramResponse>): grpc.ClientUnaryCall;
}
