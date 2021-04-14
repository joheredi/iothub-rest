// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface OperationListResult {
  /** List of IoT Hub operations supported by the Microsoft.Devices resource provider. */
  value?: Operation[];
  /** URL to get the next set of operation list results if there are any. */
  nextLink?: string;
}

export interface Operation {
  /** Operation name: {provider}/{resource}/{read | write | action | delete} */
  name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
}

export interface OperationDisplay {
  /** Service provider: Microsoft Devices */
  provider?: string;
  /** Resource Type: IotHubs */
  resource?: string;
  /** Name of the operation */
  operation?: string;
  /** Description of the operation */
  description?: string;
}

export interface ErrorDetails {
  /** The error code. */
  code?: string;
  /** The HTTP status code. */
  httpStatusCode?: string;
  /** The error message. */
  message?: string;
  /** The error details. */
  details?: string;
}

export type IotHubDescription = IotHubDescriptionBase & Resource;

export interface IotHubDescriptionBase {
  /** The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. */
  etag?: string;
  /** IotHub properties */
  properties?: IotHubProperties;
  /** IotHub SKU info */
  sku: IotHubSkuInfo;
  /** The managed identities for the IotHub. */
  identity?: ArmIdentity;
}

export interface IotHubProperties {
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

export interface SharedAccessSignatureAuthorizationRule {
  /** The name of the shared access policy. */
  keyName: string;
  /** The primary key. */
  primaryKey?: string;
  /** The secondary key. */
  secondaryKey?: string;
  /** The permissions assigned to the shared access policy. */
  rights: AccessRights;
}

export interface IpFilterRule {
  /** The name of the IP filter rule. */
  filterName: string;
  /** The desired action for requests captured by this rule. */
  action: IpFilterActionType;
  /** A string that contains the IP address range in CIDR notation for the rule. */
  ipMask: string;
}

export interface NetworkRuleSetProperties {
  /** Default Action for Network Rule Set */
  defaultAction?: DefaultAction;
  /** If True, then Network Rule Set is also applied to BuiltIn EventHub EndPoint of IotHub */
  applyToBuiltInEventHubEndpoint: boolean;
  /** List of IP Rules */
  ipRules: NetworkRuleSetIpRule[];
}

export interface NetworkRuleSetIpRule {
  /** Name of the IP filter rule. */
  filterName: string;
  /** IP Filter Action */
  action?: NetworkRuleIPAction;
  /** A string that contains the IP address range in CIDR notation for the rule. */
  ipMask: string;
}

export interface PrivateEndpointConnection {
  /** The resource identifier. */
  id?: string;
  /** The resource name. */
  name?: string;
  /** The resource type. */
  type?: string;
  /** The properties of a private endpoint connection */
  properties: PrivateEndpointConnectionProperties;
}

export interface PrivateEndpointConnectionProperties {
  /** The private endpoint property of a private endpoint connection */
  privateEndpoint?: PrivateEndpoint;
  /** The current state of a private endpoint connection */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}

export interface PrivateEndpoint {
  /** The resource identifier. */
  id?: string;
}

export interface PrivateLinkServiceConnectionState {
  /** The status of a private endpoint connection */
  status: PrivateLinkServiceConnectionStatus;
  /** The description for the current state of a private endpoint connection */
  description: string;
  /** Actions required for a private endpoint connection */
  actionsRequired?: string;
}

export interface EventHubProperties {
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

export interface RoutingProperties {
  /** The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs. */
  endpoints?: RoutingEndpoints;
  /** The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs. */
  routes?: RouteProperties[];
  /** The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not set, the messages which do not meet any of the conditions specified in the 'routes' section get routed to the built-in eventhub endpoint. */
  fallbackRoute?: FallbackRouteProperties;
  /** The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See: https://aka.ms/telemetryoneventgrid */
  enrichments?: EnrichmentProperties[];
}

export interface RoutingEndpoints {
  /** The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules. */
  serviceBusQueues?: RoutingServiceBusQueueEndpointProperties[];
  /** The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules. */
  serviceBusTopics?: RoutingServiceBusTopicEndpointProperties[];
  /** The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint. */
  eventHubs?: RoutingEventHubProperties[];
  /** The list of storage container endpoints that IoT hub routes messages to, based on the routing rules. */
  storageContainers?: RoutingStorageContainerProperties[];
}

export interface RoutingServiceBusQueueEndpointProperties {
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

export interface ManagedIdentity {
  /** The user assigned identity. */
  userAssignedIdentity?: string;
}

export interface RoutingServiceBusTopicEndpointProperties {
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

export interface RoutingEventHubProperties {
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

export interface RoutingStorageContainerProperties {
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

export interface RouteProperties {
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

export interface FallbackRouteProperties {
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

export interface EnrichmentProperties {
  /** The key or name for the enrichment property. */
  key: string;
  /** The value for the enrichment property. */
  value: string;
  /** The list of endpoints for which the enrichment is applied to the message. */
  endpointNames: string[];
}

export interface StorageEndpointProperties {
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

export interface MessagingEndpointProperties {
  /** The lock duration. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
  lockDurationAsIso8601?: string;
  /** The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
  ttlAsIso8601?: string;
  /** The number of times the IoT hub attempts to deliver a message. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
  maxDeliveryCount?: number;
}

export interface CloudToDeviceProperties {
  /** The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
  maxDeliveryCount?: number;
  /** The default time to live for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
  defaultTtlAsIso8601?: string;
  /** The properties of the feedback queue for cloud-to-device messages. */
  feedback?: FeedbackProperties;
}

export interface FeedbackProperties {
  /** The lock duration for the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
  lockDurationAsIso8601?: string;
  /** The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
  ttlAsIso8601?: string;
  /** The number of times the IoT hub attempts to deliver a message on the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
  maxDeliveryCount?: number;
}

export interface IotHubPropertiesDeviceStreams {
  /** List of Device Streams Endpoints. */
  streamingEndpoints?: string[];
}

export interface EncryptionPropertiesDescription {
  /** The source of the key. */
  keySource?: string;
  /** The properties of the KeyVault key. */
  keyVaultProperties?: KeyVaultKeyProperties[];
}

export interface KeyVaultKeyProperties {
  /** The identifier of the key. */
  keyIdentifier?: string;
  /** Managed identity properties of KeyVault Key. */
  identity?: ManagedIdentity;
}

export interface IotHubLocationDescription {
  /** The name of the Azure region */
  location?: string;
  /** The role of the region, can be either primary or secondary. The primary region is where the IoT hub is currently provisioned. The secondary region is the Azure disaster recovery (DR) paired region and also the region where the IoT hub can failover to. */
  role?: IotHubReplicaRoleType;
}

export interface IotHubSkuInfo {
  /** The name of the SKU. */
  name: IotHubSku;
  /** The billing tier for the IoT hub. */
  tier?: IotHubSkuTier;
  /** The number of provisioned IoT Hub units. See: https://docs.microsoft.com/azure/azure-subscription-service-limits#iot-hub-limits. */
  capacity?: number;
}

export interface ArmIdentity {
  /** Principal Id */
  principalId?: string;
  /** Tenant Id */
  tenantId?: string;
  /** The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service. */
  type?: ResourceIdentityType;
  /** Dictionary of <ArmUserIdentity> */
  userAssignedIdentities?: ArmIdentityUserAssignedIdentities;
}

export interface ArmUserIdentity {
  /** */
  principalId?: string;
  /** */
  clientId?: string;
}

export interface Resource {
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

export interface TagsResource {
  /** Resource tags */
  tags?: TagsResourceTags;
}

export interface IotHubDescriptionListResult {
  /** The array of IotHubDescription objects. */
  value?: IotHubDescription[];
  /** The next link. */
  nextLink?: string;
}

export interface RegistryStatistics {
  /** The total count of devices in the identity registry. */
  totalDeviceCount?: number;
  /** The count of enabled devices in the identity registry. */
  enabledDeviceCount?: number;
  /** The count of disabled devices in the identity registry. */
  disabledDeviceCount?: number;
}

export interface IotHubSkuDescriptionListResult {
  /** The array of IotHubSkuDescription. */
  value?: IotHubSkuDescription[];
  /** The next link. */
  nextLink?: string;
}

export interface IotHubSkuDescription {
  /** The type of the resource. */
  resourceType?: string;
  /** The type of the resource. */
  sku: IotHubSkuInfo;
  /** IotHub capacity */
  capacity: IotHubCapacity;
}

export interface IotHubCapacity {
  /** The minimum number of units. */
  minimum?: number;
  /** The maximum number of units. */
  maximum?: number;
  /** The default number of units. */
  default?: number;
  /** The type of the scaling enabled. */
  scaleType?: IotHubScaleType;
}

export interface EventHubConsumerGroupsListResult {
  /** List of consumer groups objects */
  value?: EventHubConsumerGroupInfo[];
  /** The next link. */
  nextLink?: string;
}

export interface EventHubConsumerGroupInfo {
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

export interface EventHubConsumerGroupBodyDescription {
  /** The EventHub consumer group name. */
  properties?: EventHubConsumerGroupName;
}

export interface EventHubConsumerGroupName {
  /** EventHub consumer group name */
  name?: string;
}

export interface JobResponseListResult {
  /** The array of JobResponse objects. */
  value?: JobResponse[];
  /** The next link. */
  nextLink?: string;
}

export interface JobResponse {
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

export interface IotHubQuotaMetricInfoListResult {
  /** The array of quota metrics objects. */
  value?: IotHubQuotaMetricInfo[];
  /** The next link. */
  nextLink?: string;
}

export interface IotHubQuotaMetricInfo {
  /** The name of the quota metric. */
  name?: string;
  /** The current value for the quota metric. */
  currentValue?: number;
  /** The maximum value of the quota metric. */
  maxValue?: number;
}

export interface EndpointHealthDataListResult {
  /** JSON-serialized array of Endpoint health data */
  value?: EndpointHealthData[];
  /** Link to more results */
  nextLink?: string;
}

export interface EndpointHealthData {
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

export interface OperationInputs {
  /** The name of the IoT hub to check. */
  name: string;
}

export interface IotHubNameAvailabilityInfo {
  /** The value which indicates whether the provided name is available. */
  nameAvailable?: boolean;
  /** The reason for unavailability. */
  reason?: IotHubNameUnavailabilityReason;
  /** The detailed reason message. */
  message?: string;
}

export interface UserSubscriptionQuotaListResult {
  /** */
  value?: UserSubscriptionQuota[];
  /** */
  nextLink?: string;
}

export interface UserSubscriptionQuota {
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

export interface Name {
  /** IotHub type */
  value?: string;
  /** Localized value of name */
  localizedValue?: string;
}

export interface TestAllRoutesInput {
  /** Routing source */
  routingSource?: RoutingSource;
  /** Routing message */
  message?: RoutingMessage;
  /** Routing Twin Reference */
  twin?: RoutingTwin;
}

export interface RoutingMessage {
  /** Body of routing message */
  body?: string;
  /** App properties */
  appProperties?: RoutingMessageAppProperties;
  /** System properties */
  systemProperties?: RoutingMessageSystemProperties;
}

export interface RoutingTwin {
  /** Twin Tags */
  tags?: any;
  /** */
  properties?: RoutingTwinProperties;
}

export interface RoutingTwinProperties {
  /** Twin desired properties */
  desired?: any;
  /** Twin desired properties */
  reported?: any;
}

export interface TestAllRoutesResult {
  /** JSON-serialized array of matched routes */
  routes?: MatchedRoute[];
}

export interface MatchedRoute {
  /** Properties of routes that matched */
  properties?: RouteProperties;
}

export interface TestRouteInput {
  /** Routing message */
  message?: RoutingMessage;
  /** Route properties */
  route: RouteProperties;
  /** Routing Twin Reference */
  twin?: RoutingTwin;
}

export interface TestRouteResult {
  /** Result of testing route */
  result?: TestResultStatus;
  /** Detailed result of testing route */
  details?: TestRouteResultDetails;
}

export interface TestRouteResultDetails {
  /** JSON-serialized list of route compilation errors */
  compilationErrors?: RouteCompilationError[];
}

export interface RouteCompilationError {
  /** Route error message */
  message?: string;
  /** Severity of the route error */
  severity?: RouteErrorSeverity;
  /** Location where the route error happened */
  location?: RouteErrorRange;
}

export interface RouteErrorRange {
  /** Start where the route error happened */
  start?: RouteErrorPosition;
  /** End where the route error happened */
  end?: RouteErrorPosition;
}

export interface RouteErrorPosition {
  /** Line where the route error happened */
  line?: number;
  /** Column where the route error happened */
  column?: number;
}

export interface SharedAccessSignatureAuthorizationRuleListResult {
  /** The list of shared access policies. */
  value?: SharedAccessSignatureAuthorizationRule[];
  /** The next link. */
  nextLink?: string;
}

export interface ExportDevicesRequest {
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

export interface ImportDevicesRequest {
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

export interface CertificateListDescription {
  /** The array of Certificate objects. */
  value?: CertificateDescription[];
}

export interface CertificateDescription {
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

export interface CertificateProperties {
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

export interface CertificateWithNonceDescription {
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

export interface CertificatePropertiesWithNonce {
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

export interface CertificateVerificationDescription {
  /** base-64 representation of X509 certificate .cer file or just .pem file content. */
  certificate?: string;
}

export interface FailoverInput {
  /** Region the hub will be failed over to */
  failoverRegion: string;
}

export interface PrivateLinkResources {
  /** The list of available private link resources for an IotHub */
  value?: GroupIdInformation[];
}

export interface GroupIdInformation {
  /** The resource identifier. */
  id?: string;
  /** The resource name. */
  name?: string;
  /** The resource type. */
  type?: string;
  /** The properties for a group information object */
  properties: GroupIdInformationProperties;
}

export interface GroupIdInformationProperties {
  /** The group id */
  groupId?: string;
  /** The required members for a specific group id */
  requiredMembers?: string[];
  /** The required DNS zones for a specific group id */
  requiredZoneNames?: string[];
}

export interface CertificateBodyDescription {
  /** base-64 representation of the X509 leaf certificate .cer file or just .pem file content. */
  certificate?: string;
}

export type PublicNetworkAccess = "Enabled" | "Disabled";
export type DefaultAction = "Deny" | "Allow";
export type NetworkRuleIPAction = "Allow";
export type PrivateLinkServiceConnectionStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "Disconnected";
export type AuthenticationType = "keyBased" | "identityBased";
export type RoutingStorageContainerPropertiesEncoding =
  | "Avro"
  | "AvroDeflate"
  | "JSON";
export type RoutingSource =
  | "Invalid"
  | "DeviceMessages"
  | "TwinChangeEvents"
  | "DeviceLifecycleEvents"
  | "DeviceJobLifecycleEvents"
  | "DigitalTwinChangeEvents"
  | "DeviceConnectionStateEvents";
export type Capabilities = "None" | "DeviceManagement";
export type IotHubReplicaRoleType = "primary" | "secondary";
export type IotHubSku = "F1" | "S1" | "S2" | "S3" | "B1" | "B2" | "B3";
export type JobType =
  | "unknown"
  | "export"
  | "import"
  | "backup"
  | "readDeviceProperties"
  | "writeDeviceProperties"
  | "updateDeviceConfiguration"
  | "rebootDevice"
  | "factoryResetDevice"
  | "firmwareUpdate";
export type EndpointHealthStatus =
  | "unknown"
  | "healthy"
  | "degraded"
  | "unhealthy"
  | "dead";
export type TestResultStatus = "undefined" | "false" | "true";
export type RouteErrorSeverity = "error" | "warning";
export type AccessRights =
  | "RegistryRead"
  | "RegistryWrite"
  | "ServiceConnect"
  | "DeviceConnect"
  | "RegistryRead, RegistryWrite"
  | "RegistryRead, ServiceConnect"
  | "RegistryRead, DeviceConnect"
  | "RegistryWrite, ServiceConnect"
  | "RegistryWrite, DeviceConnect"
  | "ServiceConnect, DeviceConnect"
  | "RegistryRead, RegistryWrite, ServiceConnect"
  | "RegistryRead, RegistryWrite, DeviceConnect"
  | "RegistryRead, ServiceConnect, DeviceConnect"
  | "RegistryWrite, ServiceConnect, DeviceConnect"
  | "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect";
export type IpFilterActionType = "Accept" | "Reject";
export type IotHubSkuTier = "Free" | "Standard" | "Basic";
export type ResourceIdentityType =
  | "SystemAssigned"
  | "UserAssigned"
  | "SystemAssigned, UserAssigned"
  | "None";
export type IotHubScaleType = "Automatic" | "Manual" | "None";
export type JobStatus =
  | "unknown"
  | "enqueued"
  | "running"
  | "completed"
  | "failed"
  | "cancelled";
export type IotHubNameUnavailabilityReason = "Invalid" | "AlreadyExists";
export type IotHubPropertiesEventHubEndpoints = Record<
  string,
  EventHubProperties
>;
export type IotHubPropertiesStorageEndpoints = Record<
  string,
  StorageEndpointProperties
>;
export type IotHubPropertiesMessagingEndpoints = Record<
  string,
  MessagingEndpointProperties
>;
export type ArmIdentityUserAssignedIdentities = Record<string, ArmUserIdentity>;
export type ResourceTags = Record<string, string>;
export type TagsResourceTags = Record<string, string>;
export type EventHubConsumerGroupInfoProperties = Record<string, string>;
export type RoutingMessageAppProperties = Record<string, string>;
export type RoutingMessageSystemProperties = Record<string, string>;
