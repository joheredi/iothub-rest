// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsListParameters,
  IotHubResourceGetParameters,
  IotHubResourceCreateOrUpdateParameters,
  IotHubResourceUpdateParameters,
  IotHubResourceDeleteParameters,
  IotHubResourceListBySubscriptionParameters,
  IotHubResourceListByResourceGroupParameters,
  IotHubResourceGetStatsParameters,
  IotHubResourceGetValidSkusParameters,
  IotHubResourceListEventHubConsumerGroupsParameters,
  IotHubResourceGetEventHubConsumerGroupParameters,
  IotHubResourceCreateEventHubConsumerGroupParameters,
  IotHubResourceDeleteEventHubConsumerGroupParameters,
  IotHubResourceListJobsParameters,
  IotHubResourceGetJobParameters,
  IotHubResourceGetQuotaMetricsParameters,
  IotHubResourceGetEndpointHealthParameters,
  IotHubResourceCheckNameAvailabilityParameters,
  IotHubResourceTestAllRoutesParameters,
  IotHubResourceTestRouteParameters,
  IotHubResourceListKeysParameters,
  IotHubResourceGetKeysForKeyNameParameters,
  IotHubResourceExportDevicesParameters,
  IotHubResourceImportDevicesParameters,
  ResourceProviderCommonGetSubscriptionQuotaParameters,
  CertificatesListByIotHubParameters,
  CertificatesGetParameters,
  CertificatesCreateOrUpdateParameters,
  CertificatesDeleteParameters,
  CertificatesGenerateVerificationCodeParameters,
  CertificatesVerifyParameters,
  IotHubManualFailoverParameters,
  PrivateLinkResourcesListParameters,
  PrivateLinkResourcesGetParameters,
  PrivateEndpointConnectionsListParameters,
  PrivateEndpointConnectionsGetParameters,
  PrivateEndpointConnectionsUpdateParameters,
  PrivateEndpointConnectionsDeleteParameters
} from "./parameters";
import {
  OperationsList200Response,
  OperationsListdefaultResponse,
  IotHubResourceGet200Response,
  IotHubResourceGetdefaultResponse,
  IotHubResourceCreateOrUpdate200Response,
  IotHubResourceCreateOrUpdate201Response,
  IotHubResourceCreateOrUpdatedefaultResponse,
  IotHubResourceUpdate200Response,
  IotHubResourceDelete200Response,
  IotHubResourceDelete202Response,
  IotHubResourceDelete204Response,
  IotHubResourceDelete404Response,
  IotHubResourceDeletedefaultResponse,
  IotHubResourceListBySubscription200Response,
  IotHubResourceListBySubscriptiondefaultResponse,
  IotHubResourceListByResourceGroup200Response,
  IotHubResourceListByResourceGroupdefaultResponse,
  IotHubResourceGetStats200Response,
  IotHubResourceGetStatsdefaultResponse,
  IotHubResourceGetValidSkus200Response,
  IotHubResourceGetValidSkusdefaultResponse,
  IotHubResourceListEventHubConsumerGroups200Response,
  IotHubResourceListEventHubConsumerGroupsdefaultResponse,
  IotHubResourceGetEventHubConsumerGroup200Response,
  IotHubResourceGetEventHubConsumerGroupdefaultResponse,
  IotHubResourceCreateEventHubConsumerGroup200Response,
  IotHubResourceCreateEventHubConsumerGroupdefaultResponse,
  IotHubResourceDeleteEventHubConsumerGroup200Response,
  IotHubResourceDeleteEventHubConsumerGroupdefaultResponse,
  IotHubResourceListJobs200Response,
  IotHubResourceListJobsdefaultResponse,
  IotHubResourceGetJob200Response,
  IotHubResourceGetJobdefaultResponse,
  IotHubResourceGetQuotaMetrics200Response,
  IotHubResourceGetQuotaMetricsdefaultResponse,
  IotHubResourceGetEndpointHealth200Response,
  IotHubResourceGetEndpointHealthdefaultResponse,
  IotHubResourceCheckNameAvailability200Response,
  IotHubResourceCheckNameAvailabilitydefaultResponse,
  IotHubResourceTestAllRoutes200Response,
  IotHubResourceTestAllRoutesdefaultResponse,
  IotHubResourceTestRoute200Response,
  IotHubResourceTestRoutedefaultResponse,
  IotHubResourceListKeys200Response,
  IotHubResourceListKeysdefaultResponse,
  IotHubResourceGetKeysForKeyName200Response,
  IotHubResourceGetKeysForKeyNamedefaultResponse,
  IotHubResourceExportDevices200Response,
  IotHubResourceExportDevicesdefaultResponse,
  IotHubResourceImportDevices200Response,
  IotHubResourceImportDevicesdefaultResponse,
  ResourceProviderCommonGetSubscriptionQuota200Response,
  ResourceProviderCommonGetSubscriptionQuotadefaultResponse,
  CertificatesListByIotHub200Response,
  CertificatesListByIotHubdefaultResponse,
  CertificatesGet200Response,
  CertificatesGetdefaultResponse,
  CertificatesCreateOrUpdate200Response,
  CertificatesCreateOrUpdate201Response,
  CertificatesCreateOrUpdatedefaultResponse,
  CertificatesDelete200Response,
  CertificatesDelete204Response,
  CertificatesDeletedefaultResponse,
  CertificatesGenerateVerificationCode200Response,
  CertificatesGenerateVerificationCodedefaultResponse,
  CertificatesVerify200Response,
  CertificatesVerifydefaultResponse,
  IotHubManualFailover200Response,
  IotHubManualFailover202Response,
  IotHubManualFailoverdefaultResponse,
  PrivateLinkResourcesList200Response,
  PrivateLinkResourcesListdefaultResponse,
  PrivateLinkResourcesGet200Response,
  PrivateLinkResourcesGetdefaultResponse,
  PrivateEndpointConnectionsList200Response,
  PrivateEndpointConnectionsListdefaultResponse,
  PrivateEndpointConnectionsGet200Response,
  PrivateEndpointConnectionsGetdefaultResponse,
  PrivateEndpointConnectionsUpdate200Response,
  PrivateEndpointConnectionsUpdate201Response,
  PrivateEndpointConnectionsUpdatedefaultResponse,
  PrivateEndpointConnectionsDelete200Response,
  PrivateEndpointConnectionsDelete202Response,
  PrivateEndpointConnectionsDelete204Response,
  PrivateEndpointConnectionsDeletedefaultResponse
} from "./responses";
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

export interface OperationsList {
  /** Lists all of the available IoT Hub REST API operations. */
  get(
    options?: OperationsListParameters
  ): Promise<OperationsList200Response | OperationsListdefaultResponse>;
}

export interface IotHubResourceDelete {
  /** Get the non-security related metadata of an IoT hub. */
  get(
    options?: IotHubResourceGetParameters
  ): Promise<IotHubResourceGet200Response | IotHubResourceGetdefaultResponse>;
  /** Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. */
  put(
    options: IotHubResourceCreateOrUpdateParameters
  ): Promise<
    | IotHubResourceCreateOrUpdate200Response
    | IotHubResourceCreateOrUpdate201Response
    | IotHubResourceCreateOrUpdatedefaultResponse
  >;
  /** Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method */
  patch(
    options: IotHubResourceUpdateParameters
  ): Promise<IotHubResourceUpdate200Response>;
  /** Delete an IoT hub. */
  delete(
    options?: IotHubResourceDeleteParameters
  ): Promise<
    | IotHubResourceDelete200Response
    | IotHubResourceDelete202Response
    | IotHubResourceDelete204Response
    | IotHubResourceDelete404Response
    | IotHubResourceDeletedefaultResponse
  >;
}

export interface IotHubResourceListBySubscription {
  /** Get all the IoT hubs in a subscription. */
  get(
    options?: IotHubResourceListBySubscriptionParameters
  ): Promise<
    | IotHubResourceListBySubscription200Response
    | IotHubResourceListBySubscriptiondefaultResponse
  >;
}

export interface IotHubResourceListByResourceGroup {
  /** Get all the IoT hubs in a resource group. */
  get(
    options?: IotHubResourceListByResourceGroupParameters
  ): Promise<
    | IotHubResourceListByResourceGroup200Response
    | IotHubResourceListByResourceGroupdefaultResponse
  >;
}

export interface IotHubResourceGetStats {
  /** Get the statistics from an IoT hub. */
  get(
    options?: IotHubResourceGetStatsParameters
  ): Promise<
    IotHubResourceGetStats200Response | IotHubResourceGetStatsdefaultResponse
  >;
}

export interface IotHubResourceGetValidSkus {
  /** Get the list of valid SKUs for an IoT hub. */
  get(
    options?: IotHubResourceGetValidSkusParameters
  ): Promise<
    | IotHubResourceGetValidSkus200Response
    | IotHubResourceGetValidSkusdefaultResponse
  >;
}

export interface IotHubResourceListEventHubConsumerGroups {
  /** Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub. */
  get(
    options?: IotHubResourceListEventHubConsumerGroupsParameters
  ): Promise<
    | IotHubResourceListEventHubConsumerGroups200Response
    | IotHubResourceListEventHubConsumerGroupsdefaultResponse
  >;
}

export interface IotHubResourceDeleteEventHubConsumerGroup {
  /** Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub. */
  get(
    options?: IotHubResourceGetEventHubConsumerGroupParameters
  ): Promise<
    | IotHubResourceGetEventHubConsumerGroup200Response
    | IotHubResourceGetEventHubConsumerGroupdefaultResponse
  >;
  /** Add a consumer group to an Event Hub-compatible endpoint in an IoT hub. */
  put(
    options: IotHubResourceCreateEventHubConsumerGroupParameters
  ): Promise<
    | IotHubResourceCreateEventHubConsumerGroup200Response
    | IotHubResourceCreateEventHubConsumerGroupdefaultResponse
  >;
  /** Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub. */
  delete(
    options?: IotHubResourceDeleteEventHubConsumerGroupParameters
  ): Promise<
    | IotHubResourceDeleteEventHubConsumerGroup200Response
    | IotHubResourceDeleteEventHubConsumerGroupdefaultResponse
  >;
}

export interface IotHubResourceListJobs {
  /** Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. */
  get(
    options?: IotHubResourceListJobsParameters
  ): Promise<
    IotHubResourceListJobs200Response | IotHubResourceListJobsdefaultResponse
  >;
}

export interface IotHubResourceGetJob {
  /** Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. */
  get(
    options?: IotHubResourceGetJobParameters
  ): Promise<
    IotHubResourceGetJob200Response | IotHubResourceGetJobdefaultResponse
  >;
}

export interface IotHubResourceGetQuotaMetrics {
  /** Get the quota metrics for an IoT hub. */
  get(
    options?: IotHubResourceGetQuotaMetricsParameters
  ): Promise<
    | IotHubResourceGetQuotaMetrics200Response
    | IotHubResourceGetQuotaMetricsdefaultResponse
  >;
}

export interface IotHubResourceGetEndpointHealth {
  /** Get the health for routing endpoints. */
  get(
    options?: IotHubResourceGetEndpointHealthParameters
  ): Promise<
    | IotHubResourceGetEndpointHealth200Response
    | IotHubResourceGetEndpointHealthdefaultResponse
  >;
}

export interface IotHubResourceCheckNameAvailability {
  /** Check if an IoT hub name is available. */
  post(
    options: IotHubResourceCheckNameAvailabilityParameters
  ): Promise<
    | IotHubResourceCheckNameAvailability200Response
    | IotHubResourceCheckNameAvailabilitydefaultResponse
  >;
}

export interface IotHubResourceTestAllRoutes {
  /** Test all routes configured in this Iot Hub */
  post(
    options: IotHubResourceTestAllRoutesParameters
  ): Promise<
    | IotHubResourceTestAllRoutes200Response
    | IotHubResourceTestAllRoutesdefaultResponse
  >;
}

export interface IotHubResourceTestRoute {
  /** Test the new route for this Iot Hub */
  post(
    options: IotHubResourceTestRouteParameters
  ): Promise<
    IotHubResourceTestRoute200Response | IotHubResourceTestRoutedefaultResponse
  >;
}

export interface IotHubResourceListKeys {
  /** Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. */
  post(
    options?: IotHubResourceListKeysParameters
  ): Promise<
    IotHubResourceListKeys200Response | IotHubResourceListKeysdefaultResponse
  >;
}

export interface IotHubResourceGetKeysForKeyName {
  /** Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. */
  post(
    options?: IotHubResourceGetKeysForKeyNameParameters
  ): Promise<
    | IotHubResourceGetKeysForKeyName200Response
    | IotHubResourceGetKeysForKeyNamedefaultResponse
  >;
}

export interface IotHubResourceExportDevices {
  /** Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. */
  post(
    options: IotHubResourceExportDevicesParameters
  ): Promise<
    | IotHubResourceExportDevices200Response
    | IotHubResourceExportDevicesdefaultResponse
  >;
}

export interface IotHubResourceImportDevices {
  /** Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. */
  post(
    options: IotHubResourceImportDevicesParameters
  ): Promise<
    | IotHubResourceImportDevices200Response
    | IotHubResourceImportDevicesdefaultResponse
  >;
}

export interface ResourceProviderCommonGetSubscriptionQuota {
  /** Get the number of free and paid iot hubs in the subscription */
  get(
    options?: ResourceProviderCommonGetSubscriptionQuotaParameters
  ): Promise<
    | ResourceProviderCommonGetSubscriptionQuota200Response
    | ResourceProviderCommonGetSubscriptionQuotadefaultResponse
  >;
}

export interface CertificatesListByIotHub {
  /** Returns the list of certificates. */
  get(
    options?: CertificatesListByIotHubParameters
  ): Promise<
    | CertificatesListByIotHub200Response
    | CertificatesListByIotHubdefaultResponse
  >;
}

export interface CertificatesDelete {
  /** Returns the certificate. */
  get(
    options?: CertificatesGetParameters
  ): Promise<CertificatesGet200Response | CertificatesGetdefaultResponse>;
  /** Adds new or replaces existing certificate. */
  put(
    options: CertificatesCreateOrUpdateParameters
  ): Promise<
    | CertificatesCreateOrUpdate200Response
    | CertificatesCreateOrUpdate201Response
    | CertificatesCreateOrUpdatedefaultResponse
  >;
  /** Deletes an existing X509 certificate or does nothing if it does not exist. */
  delete(
    options?: CertificatesDeleteParameters
  ): Promise<
    | CertificatesDelete200Response
    | CertificatesDelete204Response
    | CertificatesDeletedefaultResponse
  >;
}

export interface CertificatesGenerateVerificationCode {
  /** Generates verification code for proof of possession flow. The verification code will be used to generate a leaf certificate. */
  post(
    options?: CertificatesGenerateVerificationCodeParameters
  ): Promise<
    | CertificatesGenerateVerificationCode200Response
    | CertificatesGenerateVerificationCodedefaultResponse
  >;
}

export interface CertificatesVerify {
  /** Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate. */
  post(
    options: CertificatesVerifyParameters
  ): Promise<CertificatesVerify200Response | CertificatesVerifydefaultResponse>;
}

export interface IotHubManualFailover {
  /** Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover */
  post(
    options: IotHubManualFailoverParameters
  ): Promise<
    | IotHubManualFailover200Response
    | IotHubManualFailover202Response
    | IotHubManualFailoverdefaultResponse
  >;
}

export interface PrivateLinkResourcesList {
  /** List private link resources for the given IotHub */
  get(
    options?: PrivateLinkResourcesListParameters
  ): Promise<
    | PrivateLinkResourcesList200Response
    | PrivateLinkResourcesListdefaultResponse
  >;
}

export interface PrivateLinkResourcesGet {
  /** Get the specified private link resource for the given IotHub */
  get(
    options?: PrivateLinkResourcesGetParameters
  ): Promise<
    PrivateLinkResourcesGet200Response | PrivateLinkResourcesGetdefaultResponse
  >;
}

export interface PrivateEndpointConnectionsList {
  /** List private endpoint connection properties */
  get(
    options?: PrivateEndpointConnectionsListParameters
  ): Promise<
    | PrivateEndpointConnectionsList200Response
    | PrivateEndpointConnectionsListdefaultResponse
  >;
}

export interface PrivateEndpointConnectionsDelete {
  /** Get private endpoint connection properties */
  get(
    options?: PrivateEndpointConnectionsGetParameters
  ): Promise<
    | PrivateEndpointConnectionsGet200Response
    | PrivateEndpointConnectionsGetdefaultResponse
  >;
  /** Update the status of a private endpoint connection with the specified name */
  put(
    options: PrivateEndpointConnectionsUpdateParameters
  ): Promise<
    | PrivateEndpointConnectionsUpdate200Response
    | PrivateEndpointConnectionsUpdate201Response
    | PrivateEndpointConnectionsUpdatedefaultResponse
  >;
  /** Delete private endpoint connection with the specified name */
  delete(
    options?: PrivateEndpointConnectionsDeleteParameters
  ): Promise<
    | PrivateEndpointConnectionsDelete200Response
    | PrivateEndpointConnectionsDelete202Response
    | PrivateEndpointConnectionsDelete204Response
    | PrivateEndpointConnectionsDeletedefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/providers/Microsoft.Devices/operations' has methods for the following verbs: get */
  (path: "/providers/Microsoft.Devices/operations"): OperationsList;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string
  ): IotHubResourceDelete;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.Devices/IotHubs' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/IotHubs",
    subscriptionId: string
  ): IotHubResourceListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs",
    subscriptionId: string,
    resourceGroupName: string
  ): IotHubResourceListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/IotHubStats' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubStats",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string
  ): IotHubResourceGetStats;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/skus' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/skus",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string
  ): IotHubResourceGetValidSkus;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/eventHubEndpoints/\{eventHubEndpointName\}/ConsumerGroups' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string
  ): IotHubResourceListEventHubConsumerGroups;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/eventHubEndpoints/\{eventHubEndpointName\}/ConsumerGroups/\{name\}' has methods for the following verbs: get, put, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    name: string
  ): IotHubResourceDeleteEventHubConsumerGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/jobs' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string
  ): IotHubResourceListJobs;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs/{jobId}",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string,
    jobId: string
  ): IotHubResourceGetJob;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/quotaMetrics' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/quotaMetrics",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string
  ): IotHubResourceGetQuotaMetrics;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{iotHubName\}/routingEndpointsHealth' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routingEndpointsHealth",
    subscriptionId: string,
    resourceGroupName: string,
    iotHubName: string
  ): IotHubResourceGetEndpointHealth;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.Devices/checkNameAvailability' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/checkNameAvailability",
    subscriptionId: string
  ): IotHubResourceCheckNameAvailability;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{iotHubName\}/routing/routes/$testall' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testall",
    iotHubName: string,
    subscriptionId: string,
    resourceGroupName: string
  ): IotHubResourceTestAllRoutes;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{iotHubName\}/routing/routes/$testnew' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testnew",
    iotHubName: string,
    subscriptionId: string,
    resourceGroupName: string
  ): IotHubResourceTestRoute;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/listkeys' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/listkeys",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string
  ): IotHubResourceListKeys;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/IotHubKeys/\{keyName\}/listkeys' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubKeys/{keyName}/listkeys",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string,
    keyName: string
  ): IotHubResourceGetKeysForKeyName;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/exportDevices' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/exportDevices",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string
  ): IotHubResourceExportDevices;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/importDevices' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/importDevices",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string
  ): IotHubResourceImportDevices;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.Devices/usages' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/usages",
    subscriptionId: string
  ): ResourceProviderCommonGetSubscriptionQuota;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/certificates' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string
  ): CertificatesListByIotHub;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/certificates/\{certificateName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string,
    certificateName: string
  ): CertificatesDelete;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/certificates/\{certificateName\}/generateVerificationCode' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/generateVerificationCode",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string,
    certificateName: string
  ): CertificatesGenerateVerificationCode;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/certificates/\{certificateName\}/verify' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/verify",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string,
    certificateName: string
  ): CertificatesVerify;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{iotHubName\}/failover' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/failover",
    iotHubName: string,
    subscriptionId: string,
    resourceGroupName: string
  ): IotHubManualFailover;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/iotHubs/\{resourceName\}/privateLinkResources' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateLinkResources",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string
  ): PrivateLinkResourcesList;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/iotHubs/\{resourceName\}/privateLinkResources/\{groupId\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateLinkResources/{groupId}",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string,
    groupId: string
  ): PrivateLinkResourcesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/iotHubs/\{resourceName\}/privateEndpointConnections' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string
  ): PrivateEndpointConnectionsList;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/iotHubs/\{resourceName\}/privateEndpointConnections/\{privateEndpointConnectionName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
    subscriptionId: string,
    resourceGroupName: string,
    resourceName: string,
    privateEndpointConnectionName: string
  ): PrivateEndpointConnectionsDelete;
}

export type IotHubClientClient = Client & {
  path: Routes;
};

export interface IotHubClientFactory {
  (credentials: TokenCredential | KeyCredential, options?: ClientOptions): void;
}

export default function IotHubClient(
  credentials: TokenCredential | KeyCredential,
  options: ClientOptions = {}
): IotHubClientClient {
  const baseUrl = options.baseUrl ?? "https://management.azure.com";
  options = {
    ...options,
    credentials: {
      scopes: ["https://management.azure.com/.default"]
    }
  };

  return getClient(baseUrl, credentials, options) as IotHubClientClient;
}
