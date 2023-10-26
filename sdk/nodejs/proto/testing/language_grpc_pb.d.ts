// GENERATED CODE -- DO NOT EDIT!

// package: pulumirpc.testing
// file: pulumi/testing/language.proto

import * as pulumi_testing_language_pb from "../../pulumi/testing/language_pb";
import * as grpc from "@grpc/grpc-js";

interface ILanguageTestService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getLanguageTests: grpc.MethodDefinition<pulumi_testing_language_pb.GetLanguageTestsRequest, pulumi_testing_language_pb.GetLanguageTestsResponse>;
  prepareLanguageTests: grpc.MethodDefinition<pulumi_testing_language_pb.PrepareLanguageTestsRequest, pulumi_testing_language_pb.PrepareLanguageTestsResponse>;
  runLanguageTest: grpc.MethodDefinition<pulumi_testing_language_pb.RunLanguageTestRequest, pulumi_testing_language_pb.RunLanguageTestResponse>;
}

export const LanguageTestService: ILanguageTestService;

export interface ILanguageTestServer extends grpc.UntypedServiceImplementation {
  getLanguageTests: grpc.handleUnaryCall<pulumi_testing_language_pb.GetLanguageTestsRequest, pulumi_testing_language_pb.GetLanguageTestsResponse>;
  prepareLanguageTests: grpc.handleUnaryCall<pulumi_testing_language_pb.PrepareLanguageTestsRequest, pulumi_testing_language_pb.PrepareLanguageTestsResponse>;
  runLanguageTest: grpc.handleUnaryCall<pulumi_testing_language_pb.RunLanguageTestRequest, pulumi_testing_language_pb.RunLanguageTestResponse>;
}

export class LanguageTestClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getLanguageTests(argument: pulumi_testing_language_pb.GetLanguageTestsRequest, callback: grpc.requestCallback<pulumi_testing_language_pb.GetLanguageTestsResponse>): grpc.ClientUnaryCall;
  getLanguageTests(argument: pulumi_testing_language_pb.GetLanguageTestsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_testing_language_pb.GetLanguageTestsResponse>): grpc.ClientUnaryCall;
  getLanguageTests(argument: pulumi_testing_language_pb.GetLanguageTestsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_testing_language_pb.GetLanguageTestsResponse>): grpc.ClientUnaryCall;
  prepareLanguageTests(argument: pulumi_testing_language_pb.PrepareLanguageTestsRequest, callback: grpc.requestCallback<pulumi_testing_language_pb.PrepareLanguageTestsResponse>): grpc.ClientUnaryCall;
  prepareLanguageTests(argument: pulumi_testing_language_pb.PrepareLanguageTestsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_testing_language_pb.PrepareLanguageTestsResponse>): grpc.ClientUnaryCall;
  prepareLanguageTests(argument: pulumi_testing_language_pb.PrepareLanguageTestsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_testing_language_pb.PrepareLanguageTestsResponse>): grpc.ClientUnaryCall;
  runLanguageTest(argument: pulumi_testing_language_pb.RunLanguageTestRequest, callback: grpc.requestCallback<pulumi_testing_language_pb.RunLanguageTestResponse>): grpc.ClientUnaryCall;
  runLanguageTest(argument: pulumi_testing_language_pb.RunLanguageTestRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_testing_language_pb.RunLanguageTestResponse>): grpc.ClientUnaryCall;
  runLanguageTest(argument: pulumi_testing_language_pb.RunLanguageTestRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pulumi_testing_language_pb.RunLanguageTestResponse>): grpc.ClientUnaryCall;
}
