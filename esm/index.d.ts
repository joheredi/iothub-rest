import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { KeyCredential } from '@azure/core-auth';
import { RequestParameters } from '@azure-rest/core-client';
import { TokenCredential } from '@azure/core-auth';

export declare type AccessRights = "RegistryRead" | "RegistryWrite" | "ServiceConnect" | "DeviceConnect" | "RegistryRead, RegistryWrite" | "RegistryRead, ServiceConnect" | "RegistryRead, DeviceConnect" | "RegistryWrite, ServiceConnect" | "RegistryWrite, DeviceConnect" | "ServiceConnect, DeviceConnect" | "RegistryRead, RegistryWrite, ServiceConnect" | "RegistryRead, RegistryWrite, DeviceConnect" | "RegistryRead, ServiceConnect, DeviceConnect" | "RegistryWrite, ServiceConnect, DeviceConnect" | "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect";

export declare interface ArmIdentity {
    /** Principal Id */
    principalId?: string;
    /** Tenant Id */
    tenantId?: string;
    /** The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service. */
    type?: ResourceIdentityType;
    /** Dictionary of <ArmUserIdentity> */
    userAssignedIdentities?: ArmIdentityUserAssignedIdentities;
}

export declare type ArmIdentityUserAssignedIdentities = Record<string, ArmUserIdentity>;

export declare interface ArmUserIdentity {
    /** */
    principalId?: string;
    /** */
    clientId?: string;
}

export declare type AuthenticationType = "keyBased" | "identityBased";

export declare type Capabilities = "None" | "DeviceManagement";

export declare interface CertificateBodyDescription {
    /** base-64 representation of the X509 leaf certificate .cer file or just .pem file content. */
    certificate?: string;
}

export declare interface CertificateDescription {
    /** The description of an X509 CA Certificate. */
    properties?: CertificateProperties;
    /** The resource identifier. */
    id?: string;
    /** The name of the certificate. */
    name?: string;
    /** The entity tag. */
    etag?: string;
    /** The resource type. */
    type?: string;
}

export declare interface CertificateListDescription {
    /** The array of Certificate objects. */
    value?: CertificateDescription[];
}

export declare interface CertificateProperties {
    /** The certificate's subject name. */
    subject?: string;
    /** The certificate's expiration date and time. */
    expiry?: Date;
    /** The certificate's thumbprint. */
    thumbprint?: string;
    /** Determines whether certificate has been verified. */
    isVerified?: boolean;
    /** The certificate's create date and time. */
    created?: Date;
    /** The certificate's last update date and time. */
    updated?: Date;
    /** The certificate content */
    certificate?: string;
}

export declare interface CertificatePropertiesWithNonce {
    /** The certificate's subject name. */
    subject?: string;
    /** The certificate's expiration date and time. */
    expiry?: Date;
    /** The certificate's thumbprint. */
    thumbprint?: string;
    /** Determines whether certificate has been verified. */
    isVerified?: boolean;
    /** The certificate's create date and time. */
    created?: Date;
    /** The certificate's last update date and time. */
    updated?: Date;
    /** The certificate's verification code that will be used for proof of possession. */
    verificationCode?: string;
    /** The certificate content */
    certificate?: string;
}

/** Adds new or replaces existing certificate. */
export declare interface CertificatesCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: CertificateDescription;
}

/** Adds new or replaces existing certificate. */
export declare interface CertificatesCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: CertificateDescription;
}

export declare interface CertificatesCreateOrUpdateBodyParam {
    body: CertificateDescription;
}

/** Adds new or replaces existing certificate. */
export declare interface CertificatesCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type CertificatesCreateOrUpdateParameters = RequestParameters & CertificatesCreateOrUpdateBodyParam;

export declare interface CertificatesDelete {
    /** Returns the certificate. */
    get(options?: CertificatesGetParameters): Promise<CertificatesGet200Response | CertificatesGetdefaultResponse>;
    /** Adds new or replaces existing certificate. */
    put(options: CertificatesCreateOrUpdateParameters): Promise<CertificatesCreateOrUpdate200Response | CertificatesCreateOrUpdate201Response | CertificatesCreateOrUpdatedefaultResponse>;
    /** Deletes an existing X509 certificate or does nothing if it does not exist. */
    delete(options?: CertificatesDeleteParameters): Promise<CertificatesDelete200Response | CertificatesDelete204Response | CertificatesDeletedefaultResponse>;
}

/** Deletes an existing X509 certificate or does nothing if it does not exist. */
export declare interface CertificatesDelete200Response extends HttpResponse {
    status: "200";
}

/** Deletes an existing X509 certificate or does nothing if it does not exist. */
export declare interface CertificatesDelete204Response extends HttpResponse {
    status: "204";
}

/** Deletes an existing X509 certificate or does nothing if it does not exist. */
export declare interface CertificatesDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type CertificatesDeleteParameters = RequestParameters;

export declare interface CertificatesGenerateVerificationCode {
    /** Generates verification code for proof of possession flow. The verification code will be used to generate a leaf certificate. */
    post(options?: CertificatesGenerateVerificationCodeParameters): Promise<CertificatesGenerateVerificationCode200Response | CertificatesGenerateVerificationCodedefaultResponse>;
}

/** Generates verification code for proof of possession flow. The verification code will be used to generate a leaf certificate. */
export declare interface CertificatesGenerateVerificationCode200Response extends HttpResponse {
    status: "200";
    body: CertificateWithNonceDescription;
}

/** Generates verification code for proof of possession flow. The verification code will be used to generate a leaf certificate. */
export declare interface CertificatesGenerateVerificationCodedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type CertificatesGenerateVerificationCodeParameters = RequestParameters;

/** Returns the certificate. */
export declare interface CertificatesGet200Response extends HttpResponse {
    status: "200";
    body: CertificateDescription;
}

/** Returns the certificate. */
export declare interface CertificatesGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type CertificatesGetParameters = RequestParameters;

export declare interface CertificatesListByIotHub {
    /** Returns the list of certificates. */
    get(options?: CertificatesListByIotHubParameters): Promise<CertificatesListByIotHub200Response | CertificatesListByIotHubdefaultResponse>;
}

/** Returns the list of certificates. */
export declare interface CertificatesListByIotHub200Response extends HttpResponse {
    status: "200";
    body: CertificateListDescription;
}

/** Returns the list of certificates. */
export declare interface CertificatesListByIotHubdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type CertificatesListByIotHubParameters = RequestParameters;

export declare interface CertificatesVerify {
    /** Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate. */
    post(options: CertificatesVerifyParameters): Promise<CertificatesVerify200Response | CertificatesVerifydefaultResponse>;
}

/** Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate. */
export declare interface CertificatesVerify200Response extends HttpResponse {
    status: "200";
    body: CertificateDescription;
}

export declare interface CertificatesVerifyBodyParam {
    body: CertificateVerificationDescription;
}

/** Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate. */
export declare interface CertificatesVerifydefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type CertificatesVerifyParameters = RequestParameters & CertificatesVerifyBodyParam;

export declare interface CertificateVerificationDescription {
    /** base-64 representation of X509 certificate .cer file or just .pem file content. */
    certificate?: string;
}

export declare interface CertificateWithNonceDescription {
    /** The description of an X509 CA Certificate including the challenge nonce issued for the Proof-Of-Possession flow. */
    properties?: CertificatePropertiesWithNonce;
    /** The resource identifier. */
    id?: string;
    /** The name of the certificate. */
    name?: string;
    /** The entity tag. */
    etag?: string;
    /** The resource type. */
    type?: string;
}

export declare interface CloudToDeviceProperties {
    /** The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
    maxDeliveryCount?: number;
    /** The default time to live for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
    defaultTtlAsIso8601?: string;
    /** The properties of the feedback queue for cloud-to-device messages. */
    feedback?: FeedbackProperties;
}

export declare type DefaultAction = "Deny" | "Allow";

export declare interface EncryptionPropertiesDescription {
    /** The source of the key. */
    keySource?: string;
    /** The properties of the KeyVault key. */
    keyVaultProperties?: KeyVaultKeyProperties[];
}

export declare interface EndpointHealthData {
    /** Id of the endpoint */
    endpointId?: string;
    /** Health statuses have following meanings. The 'healthy' status shows that the endpoint is accepting messages as expected. The 'unhealthy' status shows that the endpoint is not accepting messages as expected and IoT Hub is retrying to send data to this endpoint. The status of an unhealthy endpoint will be updated to healthy when IoT Hub has established an eventually consistent state of health. The 'dead' status shows that the endpoint is not accepting messages, after IoT Hub retried sending messages for the retrial period. See IoT Hub metrics to identify errors and monitor issues with endpoints. The 'unknown' status shows that the IoT Hub has not established a connection with the endpoint. No messages have been delivered to or rejected from this endpoint */
    healthStatus?: EndpointHealthStatus;
    /** Last error obtained when a message failed to be delivered to iot hub */
    lastKnownError?: string;
    /** Time at which the last known error occurred */
    lastKnownErrorTime?: Date;
    /** Last time iot hub successfully sent a message to the endpoint */
    lastSuccessfulSendAttemptTime?: Date;
    /** Last time iot hub tried to send a message to the endpoint */
    lastSendAttemptTime?: Date;
}

export declare interface EndpointHealthDataListResult {
    /** JSON-serialized array of Endpoint health data */
    value?: EndpointHealthData[];
    /** Link to more results */
    nextLink?: string;
}

export declare type EndpointHealthStatus = "unknown" | "healthy" | "degraded" | "unhealthy" | "dead";

export declare interface EnrichmentProperties {
    /** The key or name for the enrichment property. */
    key: string;
    /** The value for the enrichment property. */
    value: string;
    /** The list of endpoints for which the enrichment is applied to the message. */
    endpointNames: string[];
}

export declare interface ErrorDetails {
    /** The error code. */
    code?: string;
    /** The HTTP status code. */
    httpStatusCode?: string;
    /** The error message. */
    message?: string;
    /** The error details. */
    details?: string;
}

export declare interface EventHubConsumerGroupBodyDescription {
    /** The EventHub consumer group name. */
    properties?: EventHubConsumerGroupName;
}

export declare interface EventHubConsumerGroupInfo {
    /** The tags. */
    properties?: EventHubConsumerGroupInfoProperties;
    /** The Event Hub-compatible consumer group identifier. */
    id?: string;
    /** The Event Hub-compatible consumer group name. */
    name?: string;
    /** the resource type. */
    type?: string;
    /** The etag. */
    etag?: string;
}

export declare type EventHubConsumerGroupInfoProperties = Record<string, string>;

export declare interface EventHubConsumerGroupName {
    /** EventHub consumer group name */
    name?: string;
}

export declare interface EventHubConsumerGroupsListResult {
    /** List of consumer groups objects */
    value?: EventHubConsumerGroupInfo[];
    /** The next link. */
    nextLink?: string;
}

export declare interface EventHubProperties {
    /** The retention time for device-to-cloud messages in days. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages */
    retentionTimeInDays?: number;
    /** The number of partitions for receiving device-to-cloud messages in the Event Hub-compatible endpoint. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages. */
    partitionCount?: number;
    /** The partition ids in the Event Hub-compatible endpoint. */
    partitionIds?: string[];
    /** The Event Hub-compatible name. */
    path?: string;
    /** The Event Hub-compatible endpoint. */
    endpoint?: string;
}

export declare interface ExportDevicesRequest {
    /** The export blob container URI. */
    exportBlobContainerUri: string;
    /** The value indicating whether keys should be excluded during export. */
    excludeKeys: boolean;
    /** The name of the blob that will be created in the provided output blob container. This blob will contain the exported device registry information for the IoT Hub. */
    exportBlobName?: string;
    /** Specifies authentication type being used for connecting to the storage account. */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of storage endpoint for export devices. */
    identity?: ManagedIdentity;
}

export declare interface FailoverInput {
    /** Region the hub will be failed over to */
    failoverRegion: string;
}

export declare interface FallbackRouteProperties {
    /** The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique. */
    name?: string;
    /** The source to which the routing rule is to be applied to. For example, DeviceMessages */
    source: RoutingSource;
    /** The condition which is evaluated in order to apply the fallback route. If the condition is not provided it will evaluate to true by default. For grammar, See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language */
    condition?: string;
    /** The list of endpoints to which the messages that satisfy the condition are routed to. Currently only 1 endpoint is allowed. */
    endpointNames: string[];
    /** Used to specify whether the fallback route is enabled. */
    isEnabled: boolean;
}

export declare interface FeedbackProperties {
    /** The lock duration for the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
    lockDurationAsIso8601?: string;
    /** The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
    ttlAsIso8601?: string;
    /** The number of times the IoT hub attempts to deliver a message on the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
    maxDeliveryCount?: number;
}

export declare interface GroupIdInformation {
    /** The resource identifier. */
    id?: string;
    /** The resource name. */
    name?: string;
    /** The resource type. */
    type?: string;
    /** The properties for a group information object */
    properties: GroupIdInformationProperties;
}

export declare interface GroupIdInformationProperties {
    /** The group id */
    groupId?: string;
    /** The required members for a specific group id */
    requiredMembers?: string[];
    /** The required DNS zones for a specific group id */
    requiredZoneNames?: string[];
}

export declare interface ImportDevicesRequest {
    /** The input blob container URI. */
    inputBlobContainerUri: string;
    /** The output blob container URI. */
    outputBlobContainerUri: string;
    /** The blob name to be used when importing from the provided input blob container. */
    inputBlobName?: string;
    /** The blob name to use for storing the status of the import job. */
    outputBlobName?: string;
    /** Specifies authentication type being used for connecting to the storage account. */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of storage endpoint for import devices. */
    identity?: ManagedIdentity;
}

export declare interface IotHubCapacity {
    /** The minimum number of units. */
    minimum?: number;
    /** The maximum number of units. */
    maximum?: number;
    /** The default number of units. */
    default?: number;
    /** The type of the scaling enabled. */
    scaleType?: IotHubScaleType;
}

declare function IotHubClient(credentials: TokenCredential | KeyCredential, options?: ClientOptions): IotHubClientClient;
export default IotHubClient;

export declare type IotHubClientClient = Client & {
    path: Routes;
};

export declare interface IotHubClientFactory {
    (credentials: TokenCredential | KeyCredential, options?: ClientOptions): void;
}

export declare type IotHubDescription = IotHubDescriptionBase & Resource;

export declare interface IotHubDescriptionBase {
    /** The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. */
    etag?: string;
    /** IotHub properties */
    properties?: IotHubProperties;
    /** IotHub SKU info */
    sku: IotHubSkuInfo;
    /** The managed identities for the IotHub. */
    identity?: ArmIdentity;
}

export declare interface IotHubDescriptionListResult {
    /** The array of IotHubDescription objects. */
    value?: IotHubDescription[];
    /** The next link. */
    nextLink?: string;
}

export declare interface IotHubLocationDescription {
    /** The name of the Azure region */
    location?: string;
    /** The role of the region, can be either primary or secondary. The primary region is where the IoT hub is currently provisioned. The secondary region is the Azure disaster recovery (DR) paired region and also the region where the IoT hub can failover to. */
    role?: IotHubReplicaRoleType;
}

export declare interface IotHubManualFailover {
    /** Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover */
    post(options: IotHubManualFailoverParameters): Promise<IotHubManualFailover200Response | IotHubManualFailover202Response | IotHubManualFailoverdefaultResponse>;
}

/** Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover */
export declare interface IotHubManualFailover200Response extends HttpResponse {
    status: "200";
}

/** Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover */
export declare interface IotHubManualFailover202Response extends HttpResponse {
    status: "202";
}

export declare interface IotHubManualFailoverBodyParam {
    body: FailoverInput;
}

/** Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover */
export declare interface IotHubManualFailoverdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubManualFailoverParameters = RequestParameters & IotHubManualFailoverBodyParam;

export declare interface IotHubNameAvailabilityInfo {
    /** The value which indicates whether the provided name is available. */
    nameAvailable?: boolean;
    /** The reason for unavailability. */
    reason?: IotHubNameUnavailabilityReason;
    /** The detailed reason message. */
    message?: string;
}

export declare type IotHubNameUnavailabilityReason = "Invalid" | "AlreadyExists";

export declare interface IotHubProperties {
    /** The shared access policies you can use to secure a connection to the IoT hub. */
    authorizationPolicies?: SharedAccessSignatureAuthorizationRule[];
    /** Whether requests from Public Network are allowed */
    publicNetworkAccess?: PublicNetworkAccess;
    /** The IP filter rules. */
    ipFilterRules?: IpFilterRule[];
    /** Network Rule Set Properties of IotHub */
    networkRuleSets?: NetworkRuleSetProperties;
    /** Specifies the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected. */
    minTlsVersion?: string;
    /** Private endpoint connections created on this IotHub */
    privateEndpointConnections?: PrivateEndpointConnection[];
    /** The provisioning state. */
    provisioningState?: string;
    /** The hub state. */
    state?: string;
    /** The name of the host. */
    hostName?: string;
    /** The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub. */
    eventHubEndpoints?: IotHubPropertiesEventHubEndpoints;
    /** The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging */
    routing?: RoutingProperties;
    /** The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown. */
    storageEndpoints?: IotHubPropertiesStorageEndpoints;
    /** The messaging endpoint properties for the file upload notification queue. */
    messagingEndpoints?: IotHubPropertiesMessagingEndpoints;
    /** If True, file upload notifications are enabled. */
    enableFileUploadNotifications?: boolean;
    /** The IoT hub cloud-to-device messaging properties. */
    cloudToDevice?: CloudToDeviceProperties;
    /** IoT hub comments. */
    comments?: string;
    /** The device streams properties of iothub. */
    deviceStreams?: IotHubPropertiesDeviceStreams;
    /** The capabilities and features enabled for the IoT hub. */
    features?: Capabilities;
    /** The encryption properties for the IoT hub. */
    encryption?: EncryptionPropertiesDescription;
    /** Primary and secondary location for iot hub */
    locations?: IotHubLocationDescription[];
}

export declare interface IotHubPropertiesDeviceStreams {
    /** List of Device Streams Endpoints. */
    streamingEndpoints?: string[];
}

export declare type IotHubPropertiesEventHubEndpoints = Record<string, EventHubProperties>;

export declare type IotHubPropertiesMessagingEndpoints = Record<string, MessagingEndpointProperties>;

export declare type IotHubPropertiesStorageEndpoints = Record<string, StorageEndpointProperties>;

export declare interface IotHubQuotaMetricInfo {
    /** The name of the quota metric. */
    name?: string;
    /** The current value for the quota metric. */
    currentValue?: number;
    /** The maximum value of the quota metric. */
    maxValue?: number;
}

export declare interface IotHubQuotaMetricInfoListResult {
    /** The array of quota metrics objects. */
    value?: IotHubQuotaMetricInfo[];
    /** The next link. */
    nextLink?: string;
}

export declare type IotHubReplicaRoleType = "primary" | "secondary";

export declare interface IotHubResourceCheckNameAvailability {
    /** Check if an IoT hub name is available. */
    post(options: IotHubResourceCheckNameAvailabilityParameters): Promise<IotHubResourceCheckNameAvailability200Response | IotHubResourceCheckNameAvailabilitydefaultResponse>;
}

/** Check if an IoT hub name is available. */
export declare interface IotHubResourceCheckNameAvailability200Response extends HttpResponse {
    status: "200";
    body: IotHubNameAvailabilityInfo;
}

export declare interface IotHubResourceCheckNameAvailabilityBodyParam {
    body: OperationInputs;
}

/** Check if an IoT hub name is available. */
export declare interface IotHubResourceCheckNameAvailabilitydefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceCheckNameAvailabilityParameters = RequestParameters & IotHubResourceCheckNameAvailabilityBodyParam;

/** Add a consumer group to an Event Hub-compatible endpoint in an IoT hub. */
export declare interface IotHubResourceCreateEventHubConsumerGroup200Response extends HttpResponse {
    status: "200";
    body: EventHubConsumerGroupInfo;
}

export declare interface IotHubResourceCreateEventHubConsumerGroupBodyParam {
    body: EventHubConsumerGroupBodyDescription;
}

/** Add a consumer group to an Event Hub-compatible endpoint in an IoT hub. */
export declare interface IotHubResourceCreateEventHubConsumerGroupdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceCreateEventHubConsumerGroupParameters = RequestParameters & IotHubResourceCreateEventHubConsumerGroupBodyParam;

/** Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. */
export declare interface IotHubResourceCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: IotHubDescription;
}

/** Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. */
export declare interface IotHubResourceCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: IotHubDescription;
}

export declare interface IotHubResourceCreateOrUpdateBodyParam {
    body: IotHubDescription;
}

/** Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. */
export declare interface IotHubResourceCreateOrUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceCreateOrUpdateParameters = RequestParameters & IotHubResourceCreateOrUpdateBodyParam;

export declare interface IotHubResourceDelete {
    /** Get the non-security related metadata of an IoT hub. */
    get(options?: IotHubResourceGetParameters): Promise<IotHubResourceGet200Response | IotHubResourceGetdefaultResponse>;
    /** Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. */
    put(options: IotHubResourceCreateOrUpdateParameters): Promise<IotHubResourceCreateOrUpdate200Response | IotHubResourceCreateOrUpdate201Response | IotHubResourceCreateOrUpdatedefaultResponse>;
    /** Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method */
    patch(options: IotHubResourceUpdateParameters): Promise<IotHubResourceUpdate200Response>;
    /** Delete an IoT hub. */
    delete(options?: IotHubResourceDeleteParameters): Promise<IotHubResourceDelete200Response | IotHubResourceDelete202Response | IotHubResourceDelete204Response | IotHubResourceDelete404Response | IotHubResourceDeletedefaultResponse>;
}

/** Delete an IoT hub. */
export declare interface IotHubResourceDelete200Response extends HttpResponse {
    status: "200";
    body: IotHubDescription;
}

/** Delete an IoT hub. */
export declare interface IotHubResourceDelete202Response extends HttpResponse {
    status: "202";
    body: IotHubDescription;
}

/** Delete an IoT hub. */
export declare interface IotHubResourceDelete204Response extends HttpResponse {
    status: "204";
}

/** Delete an IoT hub. */
export declare interface IotHubResourceDelete404Response extends HttpResponse {
    status: "404";
    body: ErrorDetails;
}

/** Delete an IoT hub. */
export declare interface IotHubResourceDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare interface IotHubResourceDeleteEventHubConsumerGroup {
    /** Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub. */
    get(options?: IotHubResourceGetEventHubConsumerGroupParameters): Promise<IotHubResourceGetEventHubConsumerGroup200Response | IotHubResourceGetEventHubConsumerGroupdefaultResponse>;
    /** Add a consumer group to an Event Hub-compatible endpoint in an IoT hub. */
    put(options: IotHubResourceCreateEventHubConsumerGroupParameters): Promise<IotHubResourceCreateEventHubConsumerGroup200Response | IotHubResourceCreateEventHubConsumerGroupdefaultResponse>;
    /** Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub. */
    delete(options?: IotHubResourceDeleteEventHubConsumerGroupParameters): Promise<IotHubResourceDeleteEventHubConsumerGroup200Response | IotHubResourceDeleteEventHubConsumerGroupdefaultResponse>;
}

/** Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub. */
export declare interface IotHubResourceDeleteEventHubConsumerGroup200Response extends HttpResponse {
    status: "200";
}

/** Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub. */
export declare interface IotHubResourceDeleteEventHubConsumerGroupdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceDeleteEventHubConsumerGroupParameters = RequestParameters;

export declare type IotHubResourceDeleteParameters = RequestParameters;

export declare interface IotHubResourceExportDevices {
    /** Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. */
    post(options: IotHubResourceExportDevicesParameters): Promise<IotHubResourceExportDevices200Response | IotHubResourceExportDevicesdefaultResponse>;
}

/** Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. */
export declare interface IotHubResourceExportDevices200Response extends HttpResponse {
    status: "200";
    body: JobResponse;
}

export declare interface IotHubResourceExportDevicesBodyParam {
    body: ExportDevicesRequest;
}

/** Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. */
export declare interface IotHubResourceExportDevicesdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceExportDevicesParameters = RequestParameters & IotHubResourceExportDevicesBodyParam;

/** Get the non-security related metadata of an IoT hub. */
export declare interface IotHubResourceGet200Response extends HttpResponse {
    status: "200";
    body: IotHubDescription;
}

/** Get the non-security related metadata of an IoT hub. */
export declare interface IotHubResourceGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare interface IotHubResourceGetEndpointHealth {
    /** Get the health for routing endpoints. */
    get(options?: IotHubResourceGetEndpointHealthParameters): Promise<IotHubResourceGetEndpointHealth200Response | IotHubResourceGetEndpointHealthdefaultResponse>;
}

/** Get the health for routing endpoints. */
export declare interface IotHubResourceGetEndpointHealth200Response extends HttpResponse {
    status: "200";
    body: EndpointHealthDataListResult;
}

/** Get the health for routing endpoints. */
export declare interface IotHubResourceGetEndpointHealthdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceGetEndpointHealthParameters = RequestParameters;

/** Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub. */
export declare interface IotHubResourceGetEventHubConsumerGroup200Response extends HttpResponse {
    status: "200";
    body: EventHubConsumerGroupInfo;
}

/** Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub. */
export declare interface IotHubResourceGetEventHubConsumerGroupdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceGetEventHubConsumerGroupParameters = RequestParameters;

export declare interface IotHubResourceGetJob {
    /** Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. */
    get(options?: IotHubResourceGetJobParameters): Promise<IotHubResourceGetJob200Response | IotHubResourceGetJobdefaultResponse>;
}

/** Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. */
export declare interface IotHubResourceGetJob200Response extends HttpResponse {
    status: "200";
    body: JobResponse;
}

/** Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. */
export declare interface IotHubResourceGetJobdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceGetJobParameters = RequestParameters;

export declare interface IotHubResourceGetKeysForKeyName {
    /** Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. */
    post(options?: IotHubResourceGetKeysForKeyNameParameters): Promise<IotHubResourceGetKeysForKeyName200Response | IotHubResourceGetKeysForKeyNamedefaultResponse>;
}

/** Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. */
export declare interface IotHubResourceGetKeysForKeyName200Response extends HttpResponse {
    status: "200";
    body: SharedAccessSignatureAuthorizationRule;
}

/** Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. */
export declare interface IotHubResourceGetKeysForKeyNamedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceGetKeysForKeyNameParameters = RequestParameters;

export declare type IotHubResourceGetParameters = RequestParameters;

export declare interface IotHubResourceGetQuotaMetrics {
    /** Get the quota metrics for an IoT hub. */
    get(options?: IotHubResourceGetQuotaMetricsParameters): Promise<IotHubResourceGetQuotaMetrics200Response | IotHubResourceGetQuotaMetricsdefaultResponse>;
}

/** Get the quota metrics for an IoT hub. */
export declare interface IotHubResourceGetQuotaMetrics200Response extends HttpResponse {
    status: "200";
    body: IotHubQuotaMetricInfoListResult;
}

/** Get the quota metrics for an IoT hub. */
export declare interface IotHubResourceGetQuotaMetricsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceGetQuotaMetricsParameters = RequestParameters;

export declare interface IotHubResourceGetStats {
    /** Get the statistics from an IoT hub. */
    get(options?: IotHubResourceGetStatsParameters): Promise<IotHubResourceGetStats200Response | IotHubResourceGetStatsdefaultResponse>;
}

/** Get the statistics from an IoT hub. */
export declare interface IotHubResourceGetStats200Response extends HttpResponse {
    status: "200";
    body: RegistryStatistics;
}

/** Get the statistics from an IoT hub. */
export declare interface IotHubResourceGetStatsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceGetStatsParameters = RequestParameters;

export declare interface IotHubResourceGetValidSkus {
    /** Get the list of valid SKUs for an IoT hub. */
    get(options?: IotHubResourceGetValidSkusParameters): Promise<IotHubResourceGetValidSkus200Response | IotHubResourceGetValidSkusdefaultResponse>;
}

/** Get the list of valid SKUs for an IoT hub. */
export declare interface IotHubResourceGetValidSkus200Response extends HttpResponse {
    status: "200";
    body: IotHubSkuDescriptionListResult;
}

/** Get the list of valid SKUs for an IoT hub. */
export declare interface IotHubResourceGetValidSkusdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceGetValidSkusParameters = RequestParameters;

export declare interface IotHubResourceImportDevices {
    /** Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. */
    post(options: IotHubResourceImportDevicesParameters): Promise<IotHubResourceImportDevices200Response | IotHubResourceImportDevicesdefaultResponse>;
}

/** Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. */
export declare interface IotHubResourceImportDevices200Response extends HttpResponse {
    status: "200";
    body: JobResponse;
}

export declare interface IotHubResourceImportDevicesBodyParam {
    body: ImportDevicesRequest;
}

/** Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities. */
export declare interface IotHubResourceImportDevicesdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceImportDevicesParameters = RequestParameters & IotHubResourceImportDevicesBodyParam;

export declare interface IotHubResourceListByResourceGroup {
    /** Get all the IoT hubs in a resource group. */
    get(options?: IotHubResourceListByResourceGroupParameters): Promise<IotHubResourceListByResourceGroup200Response | IotHubResourceListByResourceGroupdefaultResponse>;
}

/** Get all the IoT hubs in a resource group. */
export declare interface IotHubResourceListByResourceGroup200Response extends HttpResponse {
    status: "200";
    body: IotHubDescriptionListResult;
}

/** Get all the IoT hubs in a resource group. */
export declare interface IotHubResourceListByResourceGroupdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceListByResourceGroupParameters = RequestParameters;

export declare interface IotHubResourceListBySubscription {
    /** Get all the IoT hubs in a subscription. */
    get(options?: IotHubResourceListBySubscriptionParameters): Promise<IotHubResourceListBySubscription200Response | IotHubResourceListBySubscriptiondefaultResponse>;
}

/** Get all the IoT hubs in a subscription. */
export declare interface IotHubResourceListBySubscription200Response extends HttpResponse {
    status: "200";
    body: IotHubDescriptionListResult;
}

/** Get all the IoT hubs in a subscription. */
export declare interface IotHubResourceListBySubscriptiondefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceListBySubscriptionParameters = RequestParameters;

export declare interface IotHubResourceListEventHubConsumerGroups {
    /** Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub. */
    get(options?: IotHubResourceListEventHubConsumerGroupsParameters): Promise<IotHubResourceListEventHubConsumerGroups200Response | IotHubResourceListEventHubConsumerGroupsdefaultResponse>;
}

/** Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub. */
export declare interface IotHubResourceListEventHubConsumerGroups200Response extends HttpResponse {
    status: "200";
    body: EventHubConsumerGroupsListResult;
}

/** Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub. */
export declare interface IotHubResourceListEventHubConsumerGroupsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceListEventHubConsumerGroupsParameters = RequestParameters;

export declare interface IotHubResourceListJobs {
    /** Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. */
    get(options?: IotHubResourceListJobsParameters): Promise<IotHubResourceListJobs200Response | IotHubResourceListJobsdefaultResponse>;
}

/** Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. */
export declare interface IotHubResourceListJobs200Response extends HttpResponse {
    status: "200";
    body: JobResponseListResult;
}

/** Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry. */
export declare interface IotHubResourceListJobsdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceListJobsParameters = RequestParameters;

export declare interface IotHubResourceListKeys {
    /** Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. */
    post(options?: IotHubResourceListKeysParameters): Promise<IotHubResourceListKeys200Response | IotHubResourceListKeysdefaultResponse>;
}

/** Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. */
export declare interface IotHubResourceListKeys200Response extends HttpResponse {
    status: "200";
    body: SharedAccessSignatureAuthorizationRuleListResult;
}

/** Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security. */
export declare interface IotHubResourceListKeysdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceListKeysParameters = RequestParameters;

export declare interface IotHubResourceTestAllRoutes {
    /** Test all routes configured in this Iot Hub */
    post(options: IotHubResourceTestAllRoutesParameters): Promise<IotHubResourceTestAllRoutes200Response | IotHubResourceTestAllRoutesdefaultResponse>;
}

/** Test all routes configured in this Iot Hub */
export declare interface IotHubResourceTestAllRoutes200Response extends HttpResponse {
    status: "200";
    body: TestAllRoutesResult;
}

export declare interface IotHubResourceTestAllRoutesBodyParam {
    body: TestAllRoutesInput;
}

/** Test all routes configured in this Iot Hub */
export declare interface IotHubResourceTestAllRoutesdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceTestAllRoutesParameters = RequestParameters & IotHubResourceTestAllRoutesBodyParam;

export declare interface IotHubResourceTestRoute {
    /** Test the new route for this Iot Hub */
    post(options: IotHubResourceTestRouteParameters): Promise<IotHubResourceTestRoute200Response | IotHubResourceTestRoutedefaultResponse>;
}

/** Test the new route for this Iot Hub */
export declare interface IotHubResourceTestRoute200Response extends HttpResponse {
    status: "200";
    body: TestRouteResult;
}

export declare interface IotHubResourceTestRouteBodyParam {
    body: TestRouteInput;
}

/** Test the new route for this Iot Hub */
export declare interface IotHubResourceTestRoutedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type IotHubResourceTestRouteParameters = RequestParameters & IotHubResourceTestRouteBodyParam;

/** Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method */
export declare interface IotHubResourceUpdate200Response extends HttpResponse {
    status: "200";
    body: IotHubDescription;
}

export declare interface IotHubResourceUpdateBodyParam {
    body: TagsResource;
}

export declare type IotHubResourceUpdateParameters = RequestParameters & IotHubResourceUpdateBodyParam;

export declare type IotHubScaleType = "Automatic" | "Manual" | "None";

export declare type IotHubSku = "F1" | "S1" | "S2" | "S3" | "B1" | "B2" | "B3";

export declare interface IotHubSkuDescription {
    /** The type of the resource. */
    resourceType?: string;
    /** The type of the resource. */
    sku: IotHubSkuInfo;
    /** IotHub capacity */
    capacity: IotHubCapacity;
}

export declare interface IotHubSkuDescriptionListResult {
    /** The array of IotHubSkuDescription. */
    value?: IotHubSkuDescription[];
    /** The next link. */
    nextLink?: string;
}

export declare interface IotHubSkuInfo {
    /** The name of the SKU. */
    name: IotHubSku;
    /** The billing tier for the IoT hub. */
    tier?: IotHubSkuTier;
    /** The number of provisioned IoT Hub units. See: https://docs.microsoft.com/azure/azure-subscription-service-limits#iot-hub-limits. */
    capacity?: number;
}

export declare type IotHubSkuTier = "Free" | "Standard" | "Basic";

export declare type IpFilterActionType = "Accept" | "Reject";

export declare interface IpFilterRule {
    /** The name of the IP filter rule. */
    filterName: string;
    /** The desired action for requests captured by this rule. */
    action: IpFilterActionType;
    /** A string that contains the IP address range in CIDR notation for the rule. */
    ipMask: string;
}

export declare interface JobResponse {
    /** The job identifier. */
    jobId?: string;
    /** The start time of the job. */
    startTimeUtc?: Date;
    /** The time the job stopped processing. */
    endTimeUtc?: Date;
    /** The type of the job. */
    type?: JobType;
    /** The status of the job. */
    status?: JobStatus;
    /** If status == failed, this string containing the reason for the failure. */
    failureReason?: string;
    /** The status message for the job. */
    statusMessage?: string;
    /** The job identifier of the parent job, if any. */
    parentJobId?: string;
}

export declare interface JobResponseListResult {
    /** The array of JobResponse objects. */
    value?: JobResponse[];
    /** The next link. */
    nextLink?: string;
}

export declare type JobStatus = "unknown" | "enqueued" | "running" | "completed" | "failed" | "cancelled";

export declare type JobType = "unknown" | "export" | "import" | "backup" | "readDeviceProperties" | "writeDeviceProperties" | "updateDeviceConfiguration" | "rebootDevice" | "factoryResetDevice" | "firmwareUpdate";

export declare interface KeyVaultKeyProperties {
    /** The identifier of the key. */
    keyIdentifier?: string;
    /** Managed identity properties of KeyVault Key. */
    identity?: ManagedIdentity;
}

export declare interface ManagedIdentity {
    /** The user assigned identity. */
    userAssignedIdentity?: string;
}

export declare interface MatchedRoute {
    /** Properties of routes that matched */
    properties?: RouteProperties;
}

export declare interface MessagingEndpointProperties {
    /** The lock duration. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
    lockDurationAsIso8601?: string;
    /** The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
    ttlAsIso8601?: string;
    /** The number of times the IoT hub attempts to deliver a message. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
    maxDeliveryCount?: number;
}

export declare interface Name {
    /** IotHub type */
    value?: string;
    /** Localized value of name */
    localizedValue?: string;
}

export declare type NetworkRuleIPAction = "Allow";

export declare interface NetworkRuleSetIpRule {
    /** Name of the IP filter rule. */
    filterName: string;
    /** IP Filter Action */
    action?: NetworkRuleIPAction;
    /** A string that contains the IP address range in CIDR notation for the rule. */
    ipMask: string;
}

export declare interface NetworkRuleSetProperties {
    /** Default Action for Network Rule Set */
    defaultAction?: DefaultAction;
    /** If True, then Network Rule Set is also applied to BuiltIn EventHub EndPoint of IotHub */
    applyToBuiltInEventHubEndpoint: boolean;
    /** List of IP Rules */
    ipRules: NetworkRuleSetIpRule[];
}

export declare interface Operation {
    /** Operation name: {provider}/{resource}/{read | write | action | delete} */
    name?: string;
    /** The object that represents the operation. */
    display?: OperationDisplay;
}

export declare interface OperationDisplay {
    /** Service provider: Microsoft Devices */
    provider?: string;
    /** Resource Type: IotHubs */
    resource?: string;
    /** Name of the operation */
    operation?: string;
    /** Description of the operation */
    description?: string;
}

export declare interface OperationInputs {
    /** The name of the IoT hub to check. */
    name: string;
}

export declare interface OperationListResult {
    /** List of IoT Hub operations supported by the Microsoft.Devices resource provider. */
    value?: Operation[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

export declare interface OperationsList {
    /** Lists all of the available IoT Hub REST API operations. */
    get(options?: OperationsListParameters): Promise<OperationsList200Response | OperationsListdefaultResponse>;
}

/** Lists all of the available IoT Hub REST API operations. */
export declare interface OperationsList200Response extends HttpResponse {
    status: "200";
    body: OperationListResult;
}

/** Lists all of the available IoT Hub REST API operations. */
export declare interface OperationsListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type OperationsListParameters = RequestParameters;

export declare interface PrivateEndpoint {
    /** The resource identifier. */
    id?: string;
}

export declare interface PrivateEndpointConnection {
    /** The resource identifier. */
    id?: string;
    /** The resource name. */
    name?: string;
    /** The resource type. */
    type?: string;
    /** The properties of a private endpoint connection */
    properties: PrivateEndpointConnectionProperties;
}

export declare interface PrivateEndpointConnectionProperties {
    /** The private endpoint property of a private endpoint connection */
    privateEndpoint?: PrivateEndpoint;
    /** The current state of a private endpoint connection */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}

export declare interface PrivateEndpointConnectionsDelete {
    /** Get private endpoint connection properties */
    get(options?: PrivateEndpointConnectionsGetParameters): Promise<PrivateEndpointConnectionsGet200Response | PrivateEndpointConnectionsGetdefaultResponse>;
    /** Update the status of a private endpoint connection with the specified name */
    put(options: PrivateEndpointConnectionsUpdateParameters): Promise<PrivateEndpointConnectionsUpdate200Response | PrivateEndpointConnectionsUpdate201Response | PrivateEndpointConnectionsUpdatedefaultResponse>;
    /** Delete private endpoint connection with the specified name */
    delete(options?: PrivateEndpointConnectionsDeleteParameters): Promise<PrivateEndpointConnectionsDelete200Response | PrivateEndpointConnectionsDelete202Response | PrivateEndpointConnectionsDelete204Response | PrivateEndpointConnectionsDeletedefaultResponse>;
}

/** Delete private endpoint connection with the specified name */
export declare interface PrivateEndpointConnectionsDelete200Response extends HttpResponse {
    status: "200";
    body: PrivateEndpointConnection;
}

/** Delete private endpoint connection with the specified name */
export declare interface PrivateEndpointConnectionsDelete202Response extends HttpResponse {
    status: "202";
    body: PrivateEndpointConnection;
}

/** Delete private endpoint connection with the specified name */
export declare interface PrivateEndpointConnectionsDelete204Response extends HttpResponse {
    status: "204";
}

/** Delete private endpoint connection with the specified name */
export declare interface PrivateEndpointConnectionsDeletedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type PrivateEndpointConnectionsDeleteParameters = RequestParameters;

/** Get private endpoint connection properties */
export declare interface PrivateEndpointConnectionsGet200Response extends HttpResponse {
    status: "200";
    body: PrivateEndpointConnection;
}

/** Get private endpoint connection properties */
export declare interface PrivateEndpointConnectionsGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type PrivateEndpointConnectionsGetParameters = RequestParameters;

export declare interface PrivateEndpointConnectionsList {
    /** List private endpoint connection properties */
    get(options?: PrivateEndpointConnectionsListParameters): Promise<PrivateEndpointConnectionsList200Response | PrivateEndpointConnectionsListdefaultResponse>;
}

/** List private endpoint connection properties */
export declare interface PrivateEndpointConnectionsList200Response extends HttpResponse {
    status: "200";
    body: PrivateEndpointConnection[];
}

/** List private endpoint connection properties */
export declare interface PrivateEndpointConnectionsListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type PrivateEndpointConnectionsListParameters = RequestParameters;

/** Update the status of a private endpoint connection with the specified name */
export declare interface PrivateEndpointConnectionsUpdate200Response extends HttpResponse {
    status: "200";
    body: PrivateEndpointConnection;
}

/** Update the status of a private endpoint connection with the specified name */
export declare interface PrivateEndpointConnectionsUpdate201Response extends HttpResponse {
    status: "201";
    body: PrivateEndpointConnection;
}

export declare interface PrivateEndpointConnectionsUpdateBodyParam {
    body: PrivateEndpointConnection;
}

/** Update the status of a private endpoint connection with the specified name */
export declare interface PrivateEndpointConnectionsUpdatedefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type PrivateEndpointConnectionsUpdateParameters = RequestParameters & PrivateEndpointConnectionsUpdateBodyParam;

export declare interface PrivateLinkResources {
    /** The list of available private link resources for an IotHub */
    value?: GroupIdInformation[];
}

export declare interface PrivateLinkResourcesGet {
    /** Get the specified private link resource for the given IotHub */
    get(options?: PrivateLinkResourcesGetParameters): Promise<PrivateLinkResourcesGet200Response | PrivateLinkResourcesGetdefaultResponse>;
}

/** Get the specified private link resource for the given IotHub */
export declare interface PrivateLinkResourcesGet200Response extends HttpResponse {
    status: "200";
    body: GroupIdInformation;
}

/** Get the specified private link resource for the given IotHub */
export declare interface PrivateLinkResourcesGetdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type PrivateLinkResourcesGetParameters = RequestParameters;

export declare interface PrivateLinkResourcesList {
    /** List private link resources for the given IotHub */
    get(options?: PrivateLinkResourcesListParameters): Promise<PrivateLinkResourcesList200Response | PrivateLinkResourcesListdefaultResponse>;
}

/** List private link resources for the given IotHub */
export declare interface PrivateLinkResourcesList200Response extends HttpResponse {
    status: "200";
    body: PrivateLinkResources;
}

/** List private link resources for the given IotHub */
export declare interface PrivateLinkResourcesListdefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type PrivateLinkResourcesListParameters = RequestParameters;

export declare interface PrivateLinkServiceConnectionState {
    /** The status of a private endpoint connection */
    status: PrivateLinkServiceConnectionStatus;
    /** The description for the current state of a private endpoint connection */
    description: string;
    /** Actions required for a private endpoint connection */
    actionsRequired?: string;
}

export declare type PrivateLinkServiceConnectionStatus = "Pending" | "Approved" | "Rejected" | "Disconnected";

export declare type PublicNetworkAccess = "Enabled" | "Disabled";

export declare interface RegistryStatistics {
    /** The total count of devices in the identity registry. */
    totalDeviceCount?: number;
    /** The count of enabled devices in the identity registry. */
    enabledDeviceCount?: number;
    /** The count of disabled devices in the identity registry. */
    disabledDeviceCount?: number;
}

export declare interface Resource {
    /** The resource identifier. */
    id?: string;
    /** The resource name. */
    name?: string;
    /** The resource type. */
    type?: string;
    /** The resource location. */
    location: string;
    /** The resource tags. */
    tags?: ResourceTags;
}

export declare type ResourceIdentityType = "SystemAssigned" | "UserAssigned" | "SystemAssigned, UserAssigned" | "None";

export declare interface ResourceProviderCommonGetSubscriptionQuota {
    /** Get the number of free and paid iot hubs in the subscription */
    get(options?: ResourceProviderCommonGetSubscriptionQuotaParameters): Promise<ResourceProviderCommonGetSubscriptionQuota200Response | ResourceProviderCommonGetSubscriptionQuotadefaultResponse>;
}

/** Get the number of free and paid iot hubs in the subscription */
export declare interface ResourceProviderCommonGetSubscriptionQuota200Response extends HttpResponse {
    status: "200";
    body: UserSubscriptionQuotaListResult;
}

/** Get the number of free and paid iot hubs in the subscription */
export declare interface ResourceProviderCommonGetSubscriptionQuotadefaultResponse extends HttpResponse {
    status: "500";
    body: ErrorDetails;
}

export declare type ResourceProviderCommonGetSubscriptionQuotaParameters = RequestParameters;

export declare type ResourceTags = Record<string, string>;

export declare interface RouteCompilationError {
    /** Route error message */
    message?: string;
    /** Severity of the route error */
    severity?: RouteErrorSeverity;
    /** Location where the route error happened */
    location?: RouteErrorRange;
}

export declare interface RouteErrorPosition {
    /** Line where the route error happened */
    line?: number;
    /** Column where the route error happened */
    column?: number;
}

export declare interface RouteErrorRange {
    /** Start where the route error happened */
    start?: RouteErrorPosition;
    /** End where the route error happened */
    end?: RouteErrorPosition;
}

export declare type RouteErrorSeverity = "error" | "warning";

export declare interface RouteProperties {
    /** The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique. */
    name: string;
    /** The source that the routing rule is to be applied to, such as DeviceMessages. */
    source: RoutingSource;
    /** The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to true by default. For grammar, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language */
    condition?: string;
    /** The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed. */
    endpointNames: string[];
    /** Used to specify whether a route is enabled. */
    isEnabled: boolean;
}

export declare interface Routes {
    /** Resource for '/providers/Microsoft.Devices/operations' has methods for the following verbs: get */
    (path: "/providers/Microsoft.Devices/operations"): OperationsList;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}", subscriptionId: string, resourceGroupName: string, resourceName: string): IotHubResourceDelete;
    /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.Devices/IotHubs' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/IotHubs", subscriptionId: string): IotHubResourceListBySubscription;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs", subscriptionId: string, resourceGroupName: string): IotHubResourceListByResourceGroup;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/IotHubStats' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubStats", subscriptionId: string, resourceGroupName: string, resourceName: string): IotHubResourceGetStats;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/skus' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/skus", subscriptionId: string, resourceGroupName: string, resourceName: string): IotHubResourceGetValidSkus;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/eventHubEndpoints/\{eventHubEndpointName\}/ConsumerGroups' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups", subscriptionId: string, resourceGroupName: string, resourceName: string, eventHubEndpointName: string): IotHubResourceListEventHubConsumerGroups;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/eventHubEndpoints/\{eventHubEndpointName\}/ConsumerGroups/\{name\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}", subscriptionId: string, resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string): IotHubResourceDeleteEventHubConsumerGroup;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/jobs' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs", subscriptionId: string, resourceGroupName: string, resourceName: string): IotHubResourceListJobs;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/jobs/\{jobId\}' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs/{jobId}", subscriptionId: string, resourceGroupName: string, resourceName: string, jobId: string): IotHubResourceGetJob;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/quotaMetrics' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/quotaMetrics", subscriptionId: string, resourceGroupName: string, resourceName: string): IotHubResourceGetQuotaMetrics;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{iotHubName\}/routingEndpointsHealth' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routingEndpointsHealth", subscriptionId: string, resourceGroupName: string, iotHubName: string): IotHubResourceGetEndpointHealth;
    /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.Devices/checkNameAvailability' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/checkNameAvailability", subscriptionId: string): IotHubResourceCheckNameAvailability;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{iotHubName\}/routing/routes/$testall' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testall", iotHubName: string, subscriptionId: string, resourceGroupName: string): IotHubResourceTestAllRoutes;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{iotHubName\}/routing/routes/$testnew' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testnew", iotHubName: string, subscriptionId: string, resourceGroupName: string): IotHubResourceTestRoute;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/listkeys' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/listkeys", subscriptionId: string, resourceGroupName: string, resourceName: string): IotHubResourceListKeys;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/IotHubKeys/\{keyName\}/listkeys' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubKeys/{keyName}/listkeys", subscriptionId: string, resourceGroupName: string, resourceName: string, keyName: string): IotHubResourceGetKeysForKeyName;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/exportDevices' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/exportDevices", subscriptionId: string, resourceGroupName: string, resourceName: string): IotHubResourceExportDevices;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/importDevices' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/importDevices", subscriptionId: string, resourceGroupName: string, resourceName: string): IotHubResourceImportDevices;
    /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.Devices/usages' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/usages", subscriptionId: string): ResourceProviderCommonGetSubscriptionQuota;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/certificates' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates", subscriptionId: string, resourceGroupName: string, resourceName: string): CertificatesListByIotHub;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/certificates/\{certificateName\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}", subscriptionId: string, resourceGroupName: string, resourceName: string, certificateName: string): CertificatesDelete;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/certificates/\{certificateName\}/generateVerificationCode' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/generateVerificationCode", subscriptionId: string, resourceGroupName: string, resourceName: string, certificateName: string): CertificatesGenerateVerificationCode;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{resourceName\}/certificates/\{certificateName\}/verify' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/verify", subscriptionId: string, resourceGroupName: string, resourceName: string, certificateName: string): CertificatesVerify;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/IotHubs/\{iotHubName\}/failover' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/failover", iotHubName: string, subscriptionId: string, resourceGroupName: string): IotHubManualFailover;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/iotHubs/\{resourceName\}/privateLinkResources' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateLinkResources", subscriptionId: string, resourceGroupName: string, resourceName: string): PrivateLinkResourcesList;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/iotHubs/\{resourceName\}/privateLinkResources/\{groupId\}' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateLinkResources/{groupId}", subscriptionId: string, resourceGroupName: string, resourceName: string, groupId: string): PrivateLinkResourcesGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/iotHubs/\{resourceName\}/privateEndpointConnections' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections", subscriptionId: string, resourceGroupName: string, resourceName: string): PrivateEndpointConnectionsList;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Devices/iotHubs/\{resourceName\}/privateEndpointConnections/\{privateEndpointConnectionName\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}", subscriptionId: string, resourceGroupName: string, resourceName: string, privateEndpointConnectionName: string): PrivateEndpointConnectionsDelete;
}

export declare interface RoutingEndpoints {
    /** The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules. */
    serviceBusQueues?: RoutingServiceBusQueueEndpointProperties[];
    /** The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules. */
    serviceBusTopics?: RoutingServiceBusTopicEndpointProperties[];
    /** The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint. */
    eventHubs?: RoutingEventHubProperties[];
    /** The list of storage container endpoints that IoT hub routes messages to, based on the routing rules. */
    storageContainers?: RoutingStorageContainerProperties[];
}

export declare interface RoutingEventHubProperties {
    /** Id of the event hub endpoint */
    id?: string;
    /** The connection string of the event hub endpoint. */
    connectionString?: string;
    /** The url of the event hub endpoint. It must include the protocol sb:// */
    endpointUri?: string;
    /** Event hub name on the event hub namespace */
    entityPath?: string;
    /** Method used to authenticate against the event hub endpoint */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of routing event hub endpoint. */
    identity?: ManagedIdentity;
    /** The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. */
    name: string;
    /** The subscription identifier of the event hub endpoint. */
    subscriptionId?: string;
    /** The name of the resource group of the event hub endpoint. */
    resourceGroup?: string;
}

export declare interface RoutingMessage {
    /** Body of routing message */
    body?: string;
    /** App properties */
    appProperties?: RoutingMessageAppProperties;
    /** System properties */
    systemProperties?: RoutingMessageSystemProperties;
}

export declare type RoutingMessageAppProperties = Record<string, string>;

export declare type RoutingMessageSystemProperties = Record<string, string>;

export declare interface RoutingProperties {
    /** The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs. */
    endpoints?: RoutingEndpoints;
    /** The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs. */
    routes?: RouteProperties[];
    /** The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not set, the messages which do not meet any of the conditions specified in the 'routes' section get routed to the built-in eventhub endpoint. */
    fallbackRoute?: FallbackRouteProperties;
    /** The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See: https://aka.ms/telemetryoneventgrid */
    enrichments?: EnrichmentProperties[];
}

export declare interface RoutingServiceBusQueueEndpointProperties {
    /** Id of the service bus queue endpoint */
    id?: string;
    /** The connection string of the service bus queue endpoint. */
    connectionString?: string;
    /** The url of the service bus queue endpoint. It must include the protocol sb:// */
    endpointUri?: string;
    /** Queue name on the service bus namespace */
    entityPath?: string;
    /** Method used to authenticate against the service bus queue endpoint */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of routing service bus queue endpoint. */
    identity?: ManagedIdentity;
    /** The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. The name need not be the same as the actual queue name. */
    name: string;
    /** The subscription identifier of the service bus queue endpoint. */
    subscriptionId?: string;
    /** The name of the resource group of the service bus queue endpoint. */
    resourceGroup?: string;
}

export declare interface RoutingServiceBusTopicEndpointProperties {
    /** Id of the service bus topic endpoint */
    id?: string;
    /** The connection string of the service bus topic endpoint. */
    connectionString?: string;
    /** The url of the service bus topic endpoint. It must include the protocol sb:// */
    endpointUri?: string;
    /** Queue name on the service bus topic */
    entityPath?: string;
    /** Method used to authenticate against the service bus topic endpoint */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of routing service bus topic endpoint. */
    identity?: ManagedIdentity;
    /** The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.  The name need not be the same as the actual topic name. */
    name: string;
    /** The subscription identifier of the service bus topic endpoint. */
    subscriptionId?: string;
    /** The name of the resource group of the service bus topic endpoint. */
    resourceGroup?: string;
}

export declare type RoutingSource = "Invalid" | "DeviceMessages" | "TwinChangeEvents" | "DeviceLifecycleEvents" | "DeviceJobLifecycleEvents" | "DigitalTwinChangeEvents" | "DeviceConnectionStateEvents";

export declare interface RoutingStorageContainerProperties {
    /** Id of the storage container endpoint */
    id?: string;
    /** The connection string of the storage account. */
    connectionString?: string;
    /** The url of the storage endpoint. It must include the protocol https:// */
    endpointUri?: string;
    /** Method used to authenticate against the storage endpoint */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of routing storage endpoint. */
    identity?: ManagedIdentity;
    /** The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. */
    name: string;
    /** The subscription identifier of the storage account. */
    subscriptionId?: string;
    /** The name of the resource group of the storage account. */
    resourceGroup?: string;
    /** The name of storage container in the storage account. */
    containerName: string;
    /** File name format for the blob. Default format is {iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}. All parameters are mandatory but can be reordered. */
    fileNameFormat?: string;
    /** Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds. */
    batchFrequencyInSeconds?: number;
    /** Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB). */
    maxChunkSizeInBytes?: number;
    /** Encoding that is used to serialize messages to blobs. Supported values are 'avro', 'avrodeflate', and 'JSON'. Default value is 'avro'. */
    encoding?: RoutingStorageContainerPropertiesEncoding;
}

export declare type RoutingStorageContainerPropertiesEncoding = "Avro" | "AvroDeflate" | "JSON";

export declare interface RoutingTwin {
    /** Twin Tags */
    tags?: any;
    /** */
    properties?: RoutingTwinProperties;
}

export declare interface RoutingTwinProperties {
    /** Twin desired properties */
    desired?: any;
    /** Twin desired properties */
    reported?: any;
}

export declare interface SharedAccessSignatureAuthorizationRule {
    /** The name of the shared access policy. */
    keyName: string;
    /** The primary key. */
    primaryKey?: string;
    /** The secondary key. */
    secondaryKey?: string;
    /** The permissions assigned to the shared access policy. */
    rights: AccessRights;
}

export declare interface SharedAccessSignatureAuthorizationRuleListResult {
    /** The list of shared access policies. */
    value?: SharedAccessSignatureAuthorizationRule[];
    /** The next link. */
    nextLink?: string;
}

export declare interface StorageEndpointProperties {
    /** The period of time for which the SAS URI generated by IoT Hub for file upload is valid. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload#file-upload-notification-configuration-options. */
    sasTtlAsIso8601?: string;
    /** The connection string for the Azure Storage account to which files are uploaded. */
    connectionString: string;
    /** The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified. */
    containerName: string;
    /** Specifies authentication type being used for connecting to the storage account. */
    authenticationType?: AuthenticationType;
    /** Managed identity properties of storage endpoint for file upload. */
    identity?: ManagedIdentity;
}

export declare interface TagsResource {
    /** Resource tags */
    tags?: TagsResourceTags;
}

export declare type TagsResourceTags = Record<string, string>;

export declare interface TestAllRoutesInput {
    /** Routing source */
    routingSource?: RoutingSource;
    /** Routing message */
    message?: RoutingMessage;
    /** Routing Twin Reference */
    twin?: RoutingTwin;
}

export declare interface TestAllRoutesResult {
    /** JSON-serialized array of matched routes */
    routes?: MatchedRoute[];
}

export declare type TestResultStatus = "undefined" | "false" | "true";

export declare interface TestRouteInput {
    /** Routing message */
    message?: RoutingMessage;
    /** Route properties */
    route: RouteProperties;
    /** Routing Twin Reference */
    twin?: RoutingTwin;
}

export declare interface TestRouteResult {
    /** Result of testing route */
    result?: TestResultStatus;
    /** Detailed result of testing route */
    details?: TestRouteResultDetails;
}

export declare interface TestRouteResultDetails {
    /** JSON-serialized list of route compilation errors */
    compilationErrors?: RouteCompilationError[];
}

export declare interface UserSubscriptionQuota {
    /** IotHub type id */
    id?: string;
    /** Response type */
    type?: string;
    /** Unit of IotHub type */
    unit?: string;
    /** Current number of IotHub type */
    currentValue?: number;
    /** Numerical limit on IotHub type */
    limit?: number;
    /** IotHub type */
    name?: Name;
}

export declare interface UserSubscriptionQuotaListResult {
    /** */
    value?: UserSubscriptionQuota[];
    /** */
    nextLink?: string;
}

export { }
