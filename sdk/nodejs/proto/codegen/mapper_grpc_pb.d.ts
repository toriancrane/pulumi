// GENERATED CODE -- DO NOT EDIT!

// package: codegen
// file: pulumi/codegen/mapper.proto

import * as pulumi_codegen_mapper_pb from "../../pulumi/codegen/mapper_pb";
import * as grpc from "@grpc/grpc-js";

interface IMapperService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getMapping: grpc.MethodDefinition<pulumi_codegen_mapper_pb.GetMappingRequest, pulumi_codegen_mapper_pb.GetMappingResponse>;
}

export const MapperService: IMapperService;

export interface IMapperServer extends grpc.UntypedServiceImplementation {
  getMapping: grpc.handleUnaryCall<pulumi_codegen_mapper_pb.GetMappingRequest, pulumi_codegen_mapper_pb.GetMappingResponse>;
}

export class MapperClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getMapping(argument: pulumi_codegen_mapper_pb.GetMappingRequest, callback: grpc.requestCallback<pulumi_codegen_mapper_pb.GetMappingResponse>): grpc.ClientUnaryCall;
  getMapping(argument: pulumi_codegen_mapper_pb.GetMappingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_codegen_mapper_pb.GetMappingResponse>): grpc.ClientUnaryCall;
  getMapping(argument: pulumi_codegen_mapper_pb.GetMappingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_codegen_mapper_pb.GetMappingResponse>): grpc.ClientUnaryCall;
}
