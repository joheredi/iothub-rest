// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  IotHubDescription,
  TagsResource,
  EventHubConsumerGroupBodyDescription,
  OperationInputs,
  TestAllRoutesInput,
  TestRouteInput,
  ExportDevicesRequest,
  ImportDevicesRequest,
  CertificateDescription,
  CertificateVerificationDescription,
  FailoverInput,
  PrivateEndpointConnection
} from "./models";

export type OperationsListParameters = RequestParameters;
export type IotHubResourceGetParameters = RequestParameters;

export interface IotHubResourceCreateOrUpdateBodyParam {
  body: IotHubDescription;
}

export type IotHubResourceCreateOrUpdateParameters = RequestParameters &
  IotHubResourceCreateOrUpdateBodyParam;

export interface IotHubResourceUpdateBodyParam {
  body: TagsResource;
}

export type IotHubResourceUpdateParameters = RequestParameters &
  IotHubResourceUpdateBodyParam;
export type IotHubResourceDeleteParameters = RequestParameters;
export type IotHubResourceListBySubscriptionParameters = RequestParameters;
export type IotHubResourceListByResourceGroupParameters = RequestParameters;
export type IotHubResourceGetStatsParameters = RequestParameters;
export type IotHubResourceGetValidSkusParameters = RequestParameters;
export type IotHubResourceListEventHubConsumerGroupsParameters = RequestParameters;
export type IotHubResourceGetEventHubConsumerGroupParameters = RequestParameters;

export interface IotHubResourceCreateEventHubConsumerGroupBodyParam {
  body: EventHubConsumerGroupBodyDescription;
}

export type IotHubResourceCreateEventHubConsumerGroupParameters = RequestParameters &
  IotHubResourceCreateEventHubConsumerGroupBodyParam;
export type IotHubResourceDeleteEventHubConsumerGroupParameters = RequestParameters;
export type IotHubResourceListJobsParameters = RequestParameters;
export type IotHubResourceGetJobParameters = RequestParameters;
export type IotHubResourceGetQuotaMetricsParameters = RequestParameters;
export type IotHubResourceGetEndpointHealthParameters = RequestParameters;

export interface IotHubResourceCheckNameAvailabilityBodyParam {
  body: OperationInputs;
}

export type IotHubResourceCheckNameAvailabilityParameters = RequestParameters &
  IotHubResourceCheckNameAvailabilityBodyParam;

export interface IotHubResourceTestAllRoutesBodyParam {
  body: TestAllRoutesInput;
}

export type IotHubResourceTestAllRoutesParameters = RequestParameters &
  IotHubResourceTestAllRoutesBodyParam;

export interface IotHubResourceTestRouteBodyParam {
  body: TestRouteInput;
}

export type IotHubResourceTestRouteParameters = RequestParameters &
  IotHubResourceTestRouteBodyParam;
export type IotHubResourceListKeysParameters = RequestParameters;
export type IotHubResourceGetKeysForKeyNameParameters = RequestParameters;

export interface IotHubResourceExportDevicesBodyParam {
  body: ExportDevicesRequest;
}

export type IotHubResourceExportDevicesParameters = RequestParameters &
  IotHubResourceExportDevicesBodyParam;

export interface IotHubResourceImportDevicesBodyParam {
  body: ImportDevicesRequest;
}

export type IotHubResourceImportDevicesParameters = RequestParameters &
  IotHubResourceImportDevicesBodyParam;
export type ResourceProviderCommonGetSubscriptionQuotaParameters = RequestParameters;
export type CertificatesListByIotHubParameters = RequestParameters;
export type CertificatesGetParameters = RequestParameters;

export interface CertificatesCreateOrUpdateBodyParam {
  body: CertificateDescription;
}

export type CertificatesCreateOrUpdateParameters = RequestParameters &
  CertificatesCreateOrUpdateBodyParam;
export type CertificatesDeleteParameters = RequestParameters;
export type CertificatesGenerateVerificationCodeParameters = RequestParameters;

export interface CertificatesVerifyBodyParam {
  body: CertificateVerificationDescription;
}

export type CertificatesVerifyParameters = RequestParameters &
  CertificatesVerifyBodyParam;

export interface IotHubManualFailoverBodyParam {
  body: FailoverInput;
}

export type IotHubManualFailoverParameters = RequestParameters &
  IotHubManualFailoverBodyParam;
export type PrivateLinkResourcesListParameters = RequestParameters;
export type PrivateLinkResourcesGetParameters = RequestParameters;
export type PrivateEndpointConnectionsListParameters = RequestParameters;
export type PrivateEndpointConnectionsGetParameters = RequestParameters;

export interface PrivateEndpointConnectionsUpdateBodyParam {
  body: PrivateEndpointConnection;
}

export type PrivateEndpointConnectionsUpdateParameters = RequestParameters &
  PrivateEndpointConnectionsUpdateBodyParam;
export type PrivateEndpointConnectionsDeleteParameters = RequestParameters;
