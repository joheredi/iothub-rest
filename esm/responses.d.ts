import { OperationListResult, ErrorDetails, IotHubDescription, IotHubDescriptionListResult, RegistryStatistics, IotHubSkuDescriptionListResult, EventHubConsumerGroupsListResult, EventHubConsumerGroupInfo, JobResponseListResult, JobResponse, IotHubQuotaMetricInfoListResult, EndpointHealthDataListResult, IotHubNameAvailabilityInfo, TestAllRoutesResult, TestRouteResult, SharedAccessSignatureAuthorizationRuleListResult, SharedAccessSignatureAuthorizationRule, UserSubscriptionQuotaListResult, CertificateListDescription, CertificateDescription, CertificateWithNonceDescription, PrivateLinkResources, GroupIdInformation, PrivateEndpointConnection } from "./models";
import { HttpResponse } from "@azure-rest/core-client";
/** Lists all of the available IoT Hub REST API operations. */
export interface OperationsList200Response extends HttpResponse {
    status: "200";
    body: OperationListResult;
}
/** Lists all of the available IoT Hub REST API operations. */
export interface OperationsListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get the non-security related metadata of an IoT hub. */
export interface IotHubResourceGet200Response extends HttpResponse {
    status: "200";
    body: IotHubDescription;
}
/** Get the non-security related metadata of an IoT hub. */
export interface IotHubResourceGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. */
export interface IotHubResourceCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: IotHubDescription;
}
/** Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. */
export interface IotHubResourceCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: IotHubDescription;
}
/** Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. */
export interface IotHubResourceCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method */
export interface IotHubResourceUpdate200Response extends HttpResponse {
    status: "200";
    body: IotHubDescription;
}
/** Delete an IoT hub. */
export interface IotHubResourceDelete200Response extends HttpResponse {
    status: "200";
    body: IotHubDescription;
}
/** Delete an IoT hub. */
export interface IotHubResourceDelete202Response extends HttpResponse {
    status: "202";
    body: IotHubDescription;
}
/** Delete an IoT hub. */
export interface IotHubResourceDelete204Response extends HttpResponse {
    status: "204";
}
/** Delete an IoT hub. */
export interface IotHubResourceDelete404Response extends HttpResponse {
    status: "404";
    body: ErrorDetails;
}
/** Delete an IoT hub. */
export interface IotHubResourceDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get all the IoT hubs in a subscription. */
export interface IotHubResourceListBySubscription200Response extends HttpResponse {
    status: "200";
    body: IotHubDescriptionListResult;
}
/** Get all the IoT hubs in a subscription. */
export interface IotHubResourceListBySubscriptiondefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get all the IoT hubs in a resource group. */
export interface IotHubResourceListByResourceGroup200Response extends HttpResponse {
    status: "200";
    body: IotHubDescriptionListResult;
}
/** Get all the IoT hubs in a resource group. */
export interface IotHubResourceListByResourceGroupdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get the statistics from an IoT hub. */
export interface IotHubResourceGetStats200Response extends HttpResponse {
    status: "200";
    body: RegistryStatistics;
}
/** Get the statistics from an IoT hub. */
export interface IotHubResourceGetStatsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get the list of valid SKUs for an IoT hub. */
export interface IotHubResourceGetValidSkus200Response extends HttpResponse {
    status: "200";
    body: IotHubSkuDescriptionListResult;
}
/** Get the list of valid SKUs for an IoT hub. */
export interface IotHubResourceGetValidSkusdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub. */
export interface IotHubResourceListEventHubConsumerGroups200Response extends HttpResponse {
    status: "200";
    body: EventHubConsumerGroupsListResult;
}
/** Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub. */
export interface IotHubResourceListEventHubConsumerGroupsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub. */
export interface IotHubResourceGetEventHubConsumerGroup200Response extends HttpResponse {
    status: "200";
    body: EventHubConsumerGroupInfo;
}
/** Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub. */
export interface IotHubResourceGetEventHubConsumerGroupdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Add a consumer group to an Event Hub-compatible endpoint in an IoT hub. */
export interface IotHubResourceCreateEventHubConsumerGroup200Response extends HttpResponse {
    status: "200";
    body: EventHubConsumerGroupInfo;
}
/** Add a consumer group to an Event Hub-compatible endpoint in an IoT hub. */
export interface IotHubResourceCreateEventHubConsumerGroupdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub. */
export interface IotHubResourceDeleteEventHubConsumerGroup200Response extends HttpResponse {
    status: "200";
}
/** Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub. */
export interface IotHubResourceDeleteEventHubConsumerGroupdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. */
export interface IotHubResourceListJobs200Response extends HttpResponse {
    status: "200";
    body: JobResponseListResult;
}
/** Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. */
export interface IotHubResourceListJobsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. */
export interface IotHubResourceGetJob200Response extends HttpResponse {
    status: "200";
    body: JobResponse;
}
/** Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. */
export interface IotHubResourceGetJobdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get the quota metrics for an IoT hub. */
export interface IotHubResourceGetQuotaMetrics200Response extends HttpResponse {
    status: "200";
    body: IotHubQuotaMetricInfoListResult;
}
/** Get the quota metrics for an IoT hub. */
export interface IotHubResourceGetQuotaMetricsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get the health for routing endpoints. */
export interface IotHubResourceGetEndpointHealth200Response extends HttpResponse {
    status: "200";
    body: EndpointHealthDataListResult;
}
/** Get the health for routing endpoints. */
export interface IotHubResourceGetEndpointHealthdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Check if an IoT hub name is available. */
export interface IotHubResourceCheckNameAvailability200Response extends HttpResponse {
    status: "200";
    body: IotHubNameAvailabilityInfo;
}
/** Check if an IoT hub name is available. */
export interface IotHubResourceCheckNameAvailabilitydefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Test all routes configured in this Iot Hub */
export interface IotHubResourceTestAllRoutes200Response extends HttpResponse {
    status: "200";
    body: TestAllRoutesResult;
}
/** Test all routes configured in this Iot Hub */
export interface IotHubResourceTestAllRoutesdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Test the new route for this Iot Hub */
export interface IotHubResourceTestRoute200Response extends HttpResponse {
    status: "200";
    body: TestRouteResult;
}
/** Test the new route for this Iot Hub */
export interface IotHubResourceTestRoutedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. */
export interface IotHubResourceListKeys200Response extends HttpResponse {
    status: "200";
    body: SharedAccessSignatureAuthorizationRuleListResult;
}
/** Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. */
export interface IotHubResourceListKeysdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. */
export interface IotHubResourceGetKeysForKeyName200Response extends HttpResponse {
    status: "200";
    body: SharedAccessSignatureAuthorizationRule;
}
/** Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. */
export interface IotHubResourceGetKeysForKeyNamedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. */
export interface IotHubResourceExportDevices200Response extends HttpResponse {
    status: "200";
    body: JobResponse;
}
/** Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. */
export interface IotHubResourceExportDevicesdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. */
export interface IotHubResourceImportDevices200Response extends HttpResponse {
    status: "200";
    body: JobResponse;
}
/** Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. */
export interface IotHubResourceImportDevicesdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get the number of free and paid iot hubs in the subscription */
export interface ResourceProviderCommonGetSubscriptionQuota200Response extends HttpResponse {
    status: "200";
    body: UserSubscriptionQuotaListResult;
}
/** Get the number of free and paid iot hubs in the subscription */
export interface ResourceProviderCommonGetSubscriptionQuotadefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Returns the list of certificates. */
export interface CertificatesListByIotHub200Response extends HttpResponse {
    status: "200";
    body: CertificateListDescription;
}
/** Returns the list of certificates. */
export interface CertificatesListByIotHubdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Returns the certificate. */
export interface CertificatesGet200Response extends HttpResponse {
    status: "200";
    body: CertificateDescription;
}
/** Returns the certificate. */
export interface CertificatesGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Adds new or replaces existing certificate. */
export interface CertificatesCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: CertificateDescription;
}
/** Adds new or replaces existing certificate. */
export interface CertificatesCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: CertificateDescription;
}
/** Adds new or replaces existing certificate. */
export interface CertificatesCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Deletes an existing X509 certificate or does nothing if it does not exist. */
export interface CertificatesDelete200Response extends HttpResponse {
    status: "200";
}
/** Deletes an existing X509 certificate or does nothing if it does not exist. */
export interface CertificatesDelete204Response extends HttpResponse {
    status: "204";
}
/** Deletes an existing X509 certificate or does nothing if it does not exist. */
export interface CertificatesDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Generates verification code for proof of possession flow. The verification code will be used to generate a leaf certificate. */
export interface CertificatesGenerateVerificationCode200Response extends HttpResponse {
    status: "200";
    body: CertificateWithNonceDescription;
}
/** Generates verification code for proof of possession flow. The verification code will be used to generate a leaf certificate. */
export interface CertificatesGenerateVerificationCodedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate. */
export interface CertificatesVerify200Response extends HttpResponse {
    status: "200";
    body: CertificateDescription;
}
/** Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate. */
export interface CertificatesVerifydefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover */
export interface IotHubManualFailover200Response extends HttpResponse {
    status: "200";
}
/** Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover */
export interface IotHubManualFailover202Response extends HttpResponse {
    status: "202";
}
/** Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover */
export interface IotHubManualFailoverdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** List private link resources for the given IotHub */
export interface PrivateLinkResourcesList200Response extends HttpResponse {
    status: "200";
    body: PrivateLinkResources;
}
/** List private link resources for the given IotHub */
export interface PrivateLinkResourcesListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get the specified private link resource for the given IotHub */
export interface PrivateLinkResourcesGet200Response extends HttpResponse {
    status: "200";
    body: GroupIdInformation;
}
/** Get the specified private link resource for the given IotHub */
export interface PrivateLinkResourcesGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** List private endpoint connection properties */
export interface PrivateEndpointConnectionsList200Response extends HttpResponse {
    status: "200";
    body: PrivateEndpointConnection[];
}
/** List private endpoint connection properties */
export interface PrivateEndpointConnectionsListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Get private endpoint connection properties */
export interface PrivateEndpointConnectionsGet200Response extends HttpResponse {
    status: "200";
    body: PrivateEndpointConnection;
}
/** Get private endpoint connection properties */
export interface PrivateEndpointConnectionsGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Update the status of a private endpoint connection with the specified name */
export interface PrivateEndpointConnectionsUpdate200Response extends HttpResponse {
    status: "200";
    body: PrivateEndpointConnection;
}
/** Update the status of a private endpoint connection with the specified name */
export interface PrivateEndpointConnectionsUpdate201Response extends HttpResponse {
    status: "201";
    body: PrivateEndpointConnection;
}
/** Update the status of a private endpoint connection with the specified name */
export interface PrivateEndpointConnectionsUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
/** Delete private endpoint connection with the specified name */
export interface PrivateEndpointConnectionsDelete200Response extends HttpResponse {
    status: "200";
    body: PrivateEndpointConnection;
}
/** Delete private endpoint connection with the specified name */
export interface PrivateEndpointConnectionsDelete202Response extends HttpResponse {
    status: "202";
    body: PrivateEndpointConnection;
}
/** Delete private endpoint connection with the specified name */
export interface PrivateEndpointConnectionsDelete204Response extends HttpResponse {
    status: "204";
}
/** Delete private endpoint connection with the specified name */
export interface PrivateEndpointConnectionsDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}
//# sourceMappingURL=responses.d.ts.map