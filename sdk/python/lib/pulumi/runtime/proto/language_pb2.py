# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pulumi/language.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from . import plugin_pb2 as pulumi_dot_plugin__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15pulumi/language.proto\x12\tpulumirpc\x1a\x13pulumi/plugin.proto\x1a\x1bgoogle/protobuf/empty.proto\"\x9f\x01\n\rAboutResponse\x12\x12\n\nexecutable\x18\x01 \x01(\t\x12\x0f\n\x07version\x18\x02 \x01(\t\x12\x38\n\x08metadata\x18\x03 \x03(\x0b\x32&.pulumirpc.AboutResponse.MetadataEntry\x1a/\n\rMetadataEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"n\n\x1dGetProgramDependenciesRequest\x12\x0f\n\x07project\x18\x01 \x01(\t\x12\x0b\n\x03pwd\x18\x02 \x01(\t\x12\x0f\n\x07program\x18\x03 \x01(\t\x12\x1e\n\x16transitiveDependencies\x18\x04 \x01(\x08\"/\n\x0e\x44\x65pendencyInfo\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0f\n\x07version\x18\x02 \x01(\t\"Q\n\x1eGetProgramDependenciesResponse\x12/\n\x0c\x64\x65pendencies\x18\x01 \x03(\x0b\x32\x19.pulumirpc.DependencyInfo\"J\n\x19GetRequiredPluginsRequest\x12\x0f\n\x07project\x18\x01 \x01(\t\x12\x0b\n\x03pwd\x18\x02 \x01(\t\x12\x0f\n\x07program\x18\x03 \x01(\t\"J\n\x1aGetRequiredPluginsResponse\x12,\n\x07plugins\x18\x01 \x03(\x0b\x32\x1b.pulumirpc.PluginDependency\"\xb8\x02\n\nRunRequest\x12\x0f\n\x07project\x18\x01 \x01(\t\x12\r\n\x05stack\x18\x02 \x01(\t\x12\x0b\n\x03pwd\x18\x03 \x01(\t\x12\x0f\n\x07program\x18\x04 \x01(\t\x12\x0c\n\x04\x61rgs\x18\x05 \x03(\t\x12\x31\n\x06\x63onfig\x18\x06 \x03(\x0b\x32!.pulumirpc.RunRequest.ConfigEntry\x12\x0e\n\x06\x64ryRun\x18\x07 \x01(\x08\x12\x10\n\x08parallel\x18\x08 \x01(\x05\x12\x17\n\x0fmonitor_address\x18\t \x01(\t\x12\x11\n\tqueryMode\x18\n \x01(\x08\x12\x18\n\x10\x63onfigSecretKeys\x18\x0b \x03(\t\x12\x14\n\x0corganization\x18\x0c \x01(\t\x1a-\n\x0b\x43onfigEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"*\n\x0bRunResponse\x12\r\n\x05\x65rror\x18\x01 \x01(\t\x12\x0c\n\x04\x62\x61il\x18\x02 \x01(\x08\"D\n\x1aInstallDependenciesRequest\x12\x11\n\tdirectory\x18\x01 \x01(\t\x12\x13\n\x0bis_terminal\x18\x02 \x01(\x08\"=\n\x1bInstallDependenciesResponse\x12\x0e\n\x06stdout\x18\x01 \x01(\x0c\x12\x0e\n\x06stderr\x18\x02 \x01(\x0c\"K\n\x10RunPluginRequest\x12\x0b\n\x03pwd\x18\x01 \x01(\t\x12\x0f\n\x07program\x18\x02 \x01(\t\x12\x0c\n\x04\x61rgs\x18\x03 \x03(\t\x12\x0b\n\x03\x65nv\x18\x04 \x03(\t\"U\n\x11RunPluginResponse\x12\x10\n\x06stdout\x18\x01 \x01(\x0cH\x00\x12\x10\n\x06stderr\x18\x02 \x01(\x0cH\x00\x12\x12\n\x08\x65xitcode\x18\x03 \x01(\x05H\x00\x42\x08\n\x06output2\xd4\x04\n\x0fLanguageRuntime\x12\x63\n\x12GetRequiredPlugins\x12$.pulumirpc.GetRequiredPluginsRequest\x1a%.pulumirpc.GetRequiredPluginsResponse\"\x00\x12\x36\n\x03Run\x12\x15.pulumirpc.RunRequest\x1a\x16.pulumirpc.RunResponse\"\x00\x12@\n\rGetPluginInfo\x12\x16.google.protobuf.Empty\x1a\x15.pulumirpc.PluginInfo\"\x00\x12h\n\x13InstallDependencies\x12%.pulumirpc.InstallDependenciesRequest\x1a&.pulumirpc.InstallDependenciesResponse\"\x00\x30\x01\x12;\n\x05\x41\x62out\x12\x16.google.protobuf.Empty\x1a\x18.pulumirpc.AboutResponse\"\x00\x12o\n\x16GetProgramDependencies\x12(.pulumirpc.GetProgramDependenciesRequest\x1a).pulumirpc.GetProgramDependenciesResponse\"\x00\x12J\n\tRunPlugin\x12\x1b.pulumirpc.RunPluginRequest\x1a\x1c.pulumirpc.RunPluginResponse\"\x00\x30\x01\x42\x34Z2github.com/pulumi/pulumi/sdk/v3/proto/go;pulumirpcb\x06proto3')



_ABOUTRESPONSE = DESCRIPTOR.message_types_by_name['AboutResponse']
_ABOUTRESPONSE_METADATAENTRY = _ABOUTRESPONSE.nested_types_by_name['MetadataEntry']
_GETPROGRAMDEPENDENCIESREQUEST = DESCRIPTOR.message_types_by_name['GetProgramDependenciesRequest']
_DEPENDENCYINFO = DESCRIPTOR.message_types_by_name['DependencyInfo']
_GETPROGRAMDEPENDENCIESRESPONSE = DESCRIPTOR.message_types_by_name['GetProgramDependenciesResponse']
_GETREQUIREDPLUGINSREQUEST = DESCRIPTOR.message_types_by_name['GetRequiredPluginsRequest']
_GETREQUIREDPLUGINSRESPONSE = DESCRIPTOR.message_types_by_name['GetRequiredPluginsResponse']
_RUNREQUEST = DESCRIPTOR.message_types_by_name['RunRequest']
_RUNREQUEST_CONFIGENTRY = _RUNREQUEST.nested_types_by_name['ConfigEntry']
_RUNRESPONSE = DESCRIPTOR.message_types_by_name['RunResponse']
_INSTALLDEPENDENCIESREQUEST = DESCRIPTOR.message_types_by_name['InstallDependenciesRequest']
_INSTALLDEPENDENCIESRESPONSE = DESCRIPTOR.message_types_by_name['InstallDependenciesResponse']
_RUNPLUGINREQUEST = DESCRIPTOR.message_types_by_name['RunPluginRequest']
_RUNPLUGINRESPONSE = DESCRIPTOR.message_types_by_name['RunPluginResponse']
AboutResponse = _reflection.GeneratedProtocolMessageType('AboutResponse', (_message.Message,), {

  'MetadataEntry' : _reflection.GeneratedProtocolMessageType('MetadataEntry', (_message.Message,), {
    'DESCRIPTOR' : _ABOUTRESPONSE_METADATAENTRY,
    '__module__' : 'pulumi.language_pb2'
    # @@protoc_insertion_point(class_scope:pulumirpc.AboutResponse.MetadataEntry)
    })
  ,
  'DESCRIPTOR' : _ABOUTRESPONSE,
  '__module__' : 'pulumi.language_pb2'
  # @@protoc_insertion_point(class_scope:pulumirpc.AboutResponse)
  })
_sym_db.RegisterMessage(AboutResponse)
_sym_db.RegisterMessage(AboutResponse.MetadataEntry)

GetProgramDependenciesRequest = _reflection.GeneratedProtocolMessageType('GetProgramDependenciesRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETPROGRAMDEPENDENCIESREQUEST,
  '__module__' : 'pulumi.language_pb2'
  # @@protoc_insertion_point(class_scope:pulumirpc.GetProgramDependenciesRequest)
  })
_sym_db.RegisterMessage(GetProgramDependenciesRequest)

DependencyInfo = _reflection.GeneratedProtocolMessageType('DependencyInfo', (_message.Message,), {
  'DESCRIPTOR' : _DEPENDENCYINFO,
  '__module__' : 'pulumi.language_pb2'
  # @@protoc_insertion_point(class_scope:pulumirpc.DependencyInfo)
  })
_sym_db.RegisterMessage(DependencyInfo)

GetProgramDependenciesResponse = _reflection.GeneratedProtocolMessageType('GetProgramDependenciesResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETPROGRAMDEPENDENCIESRESPONSE,
  '__module__' : 'pulumi.language_pb2'
  # @@protoc_insertion_point(class_scope:pulumirpc.GetProgramDependenciesResponse)
  })
_sym_db.RegisterMessage(GetProgramDependenciesResponse)

GetRequiredPluginsRequest = _reflection.GeneratedProtocolMessageType('GetRequiredPluginsRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETREQUIREDPLUGINSREQUEST,
  '__module__' : 'pulumi.language_pb2'
  # @@protoc_insertion_point(class_scope:pulumirpc.GetRequiredPluginsRequest)
  })
_sym_db.RegisterMessage(GetRequiredPluginsRequest)

GetRequiredPluginsResponse = _reflection.GeneratedProtocolMessageType('GetRequiredPluginsResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETREQUIREDPLUGINSRESPONSE,
  '__module__' : 'pulumi.language_pb2'
  # @@protoc_insertion_point(class_scope:pulumirpc.GetRequiredPluginsResponse)
  })
_sym_db.RegisterMessage(GetRequiredPluginsResponse)

RunRequest = _reflection.GeneratedProtocolMessageType('RunRequest', (_message.Message,), {

  'ConfigEntry' : _reflection.GeneratedProtocolMessageType('ConfigEntry', (_message.Message,), {
    'DESCRIPTOR' : _RUNREQUEST_CONFIGENTRY,
    '__module__' : 'pulumi.language_pb2'
    # @@protoc_insertion_point(class_scope:pulumirpc.RunRequest.ConfigEntry)
    })
  ,
  'DESCRIPTOR' : _RUNREQUEST,
  '__module__' : 'pulumi.language_pb2'
  # @@protoc_insertion_point(class_scope:pulumirpc.RunRequest)
  })
_sym_db.RegisterMessage(RunRequest)
_sym_db.RegisterMessage(RunRequest.ConfigEntry)

RunResponse = _reflection.GeneratedProtocolMessageType('RunResponse', (_message.Message,), {
  'DESCRIPTOR' : _RUNRESPONSE,
  '__module__' : 'pulumi.language_pb2'
  # @@protoc_insertion_point(class_scope:pulumirpc.RunResponse)
  })
_sym_db.RegisterMessage(RunResponse)

InstallDependenciesRequest = _reflection.GeneratedProtocolMessageType('InstallDependenciesRequest', (_message.Message,), {
  'DESCRIPTOR' : _INSTALLDEPENDENCIESREQUEST,
  '__module__' : 'pulumi.language_pb2'
  # @@protoc_insertion_point(class_scope:pulumirpc.InstallDependenciesRequest)
  })
_sym_db.RegisterMessage(InstallDependenciesRequest)

InstallDependenciesResponse = _reflection.GeneratedProtocolMessageType('InstallDependenciesResponse', (_message.Message,), {
  'DESCRIPTOR' : _INSTALLDEPENDENCIESRESPONSE,
  '__module__' : 'pulumi.language_pb2'
  # @@protoc_insertion_point(class_scope:pulumirpc.InstallDependenciesResponse)
  })
_sym_db.RegisterMessage(InstallDependenciesResponse)

RunPluginRequest = _reflection.GeneratedProtocolMessageType('RunPluginRequest', (_message.Message,), {
  'DESCRIPTOR' : _RUNPLUGINREQUEST,
  '__module__' : 'pulumi.language_pb2'
  # @@protoc_insertion_point(class_scope:pulumirpc.RunPluginRequest)
  })
_sym_db.RegisterMessage(RunPluginRequest)

RunPluginResponse = _reflection.GeneratedProtocolMessageType('RunPluginResponse', (_message.Message,), {
  'DESCRIPTOR' : _RUNPLUGINRESPONSE,
  '__module__' : 'pulumi.language_pb2'
  # @@protoc_insertion_point(class_scope:pulumirpc.RunPluginResponse)
  })
_sym_db.RegisterMessage(RunPluginResponse)

_LANGUAGERUNTIME = DESCRIPTOR.services_by_name['LanguageRuntime']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z2github.com/pulumi/pulumi/sdk/v3/proto/go;pulumirpc'
  _ABOUTRESPONSE_METADATAENTRY._options = None
  _ABOUTRESPONSE_METADATAENTRY._serialized_options = b'8\001'
  _RUNREQUEST_CONFIGENTRY._options = None
  _RUNREQUEST_CONFIGENTRY._serialized_options = b'8\001'
  _ABOUTRESPONSE._serialized_start=87
  _ABOUTRESPONSE._serialized_end=246
  _ABOUTRESPONSE_METADATAENTRY._serialized_start=199
  _ABOUTRESPONSE_METADATAENTRY._serialized_end=246
  _GETPROGRAMDEPENDENCIESREQUEST._serialized_start=248
  _GETPROGRAMDEPENDENCIESREQUEST._serialized_end=358
  _DEPENDENCYINFO._serialized_start=360
  _DEPENDENCYINFO._serialized_end=407
  _GETPROGRAMDEPENDENCIESRESPONSE._serialized_start=409
  _GETPROGRAMDEPENDENCIESRESPONSE._serialized_end=490
  _GETREQUIREDPLUGINSREQUEST._serialized_start=492
  _GETREQUIREDPLUGINSREQUEST._serialized_end=566
  _GETREQUIREDPLUGINSRESPONSE._serialized_start=568
  _GETREQUIREDPLUGINSRESPONSE._serialized_end=642
  _RUNREQUEST._serialized_start=645
  _RUNREQUEST._serialized_end=957
  _RUNREQUEST_CONFIGENTRY._serialized_start=912
  _RUNREQUEST_CONFIGENTRY._serialized_end=957
  _RUNRESPONSE._serialized_start=959
  _RUNRESPONSE._serialized_end=1001
  _INSTALLDEPENDENCIESREQUEST._serialized_start=1003
  _INSTALLDEPENDENCIESREQUEST._serialized_end=1071
  _INSTALLDEPENDENCIESRESPONSE._serialized_start=1073
  _INSTALLDEPENDENCIESRESPONSE._serialized_end=1134
  _RUNPLUGINREQUEST._serialized_start=1136
  _RUNPLUGINREQUEST._serialized_end=1211
  _RUNPLUGINRESPONSE._serialized_start=1213
  _RUNPLUGINRESPONSE._serialized_end=1298
  _LANGUAGERUNTIME._serialized_start=1301
  _LANGUAGERUNTIME._serialized_end=1897
# @@protoc_insertion_point(module_scope)
