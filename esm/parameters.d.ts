import { RequestParameters } from "@azure-rest/core-client";
import { IotHubDescription, TagsResource, EventHubConsumerGroupBodyDescription, OperationInputs, TestAllRoutesInput, TestRouteInput, ExportDevicesRequest, ImportDevicesRequest, CertificateDescription, CertificateVerificationDescription, FailoverInput, PrivateEndpointConnection } from "./models";
export declare type OperationsListParameters = RequestParameters;
export declare type IotHubResourceGetParameters = RequestParameters;
export interface IotHubResourceCreateOrUpdateBodyParam {
    body: IotHubDescription;
}
export declare type IotHubResourceCreateOrUpdateParameters = RequestParameters & IotHubResourceCreateOrUpdateBodyParam;
export interface IotHubResourceUpdateBodyParam {
    body: TagsResource;
}
export declare type IotHubResourceUpdateParameters = RequestParameters & IotHubResourceUpdateBodyParam;
export declare type IotHubResourceDeleteParameters = RequestParameters;
export declare type IotHubResourceListBySubscriptionParameters = RequestParameters;
export declare type IotHubResourceListByResourceGroupParameters = RequestParameters;
export declare type IotHubResourceGetStatsParameters = RequestParameters;
export declare type IotHubResourceGetValidSkusParameters = RequestParameters;
export declare type IotHubResourceListEventHubConsumerGroupsParameters = RequestParameters;
export declare type IotHubResourceGetEventHubConsumerGroupParameters = RequestParameters;
export interface IotHubResourceCreateEventHubConsumerGroupBodyParam {
    body: EventHubConsumerGroupBodyDescription;
}
export declare type IotHubResourceCreateEventHubConsumerGroupParameters = RequestParameters & IotHubResourceCreateEventHubConsumerGroupBodyParam;
export declare type IotHubResourceDeleteEventHubConsumerGroupParameters = RequestParameters;
export declare type IotHubResourceListJobsParameters = RequestParameters;
export declare type IotHubResourceGetJobParameters = RequestParameters;
export declare type IotHubResourceGetQuotaMetricsParameters = RequestParameters;
export declare type IotHubResourceGetEndpointHealthParameters = RequestParameters;
export interface IotHubResourceCheckNameAvailabilityBodyParam {
    body: OperationInputs;
}
export declare type IotHubResourceCheckNameAvailabilityParameters = RequestParameters & IotHubResourceCheckNameAvailabilityBodyParam;
export interface IotHubResourceTestAllRoutesBodyParam {
    body: TestAllRoutesInput;
}
export declare type IotHubResourceTestAllRoutesParameters = RequestParameters & IotHubResourceTestAllRoutesBodyParam;
export interface IotHubResourceTestRouteBodyParam {
    body: TestRouteInput;
}
export declare type IotHubResourceTestRouteParameters = RequestParameters & IotHubResourceTestRouteBodyParam;
export declare type IotHubResourceListKeysParameters = RequestParameters;
export declare type IotHubResourceGetKeysForKeyNameParameters = RequestParameters;
export interface IotHubResourceExportDevicesBodyParam {
    body: ExportDevicesRequest;
}
export declare type IotHubResourceExportDevicesParameters = RequestParameters & IotHubResourceExportDevicesBodyParam;
export interface IotHubResourceImportDevicesBodyParam {
    body: ImportDevicesRequest;
}
export declare type IotHubResourceImportDevicesParameters = RequestParameters & IotHubResourceImportDevicesBodyParam;
export declare type ResourceProviderCommonGetSubscriptionQuotaParameters = RequestParameters;
export declare type CertificatesListByIotHubParameters = RequestParameters;
export declare type CertificatesGetParameters = RequestParameters;
export interface CertificatesCreateOrUpdateBodyParam {
    body: CertificateDescription;
}
export declare type CertificatesCreateOrUpdateParameters = RequestParameters & CertificatesCreateOrUpdateBodyParam;
export declare type CertificatesDeleteParameters = RequestParameters;
export declare type CertificatesGenerateVerificationCodeParameters = RequestParameters;
export interface CertificatesVerifyBodyParam {
    body: CertificateVerificationDescription;
}
export declare type CertificatesVerifyParameters = RequestParameters & CertificatesVerifyBodyParam;
export interface IotHubManualFailoverBodyParam {
    body: FailoverInput;
}
export declare type IotHubManualFailoverParameters = RequestParameters & IotHubManualFailoverBodyParam;
export declare type PrivateLinkResourcesListParameters = RequestParameters;
export declare type PrivateLinkResourcesGetParameters = RequestParameters;
export declare type PrivateEndpointConnectionsListParameters = RequestParameters;
export declare type PrivateEndpointConnectionsGetParameters = RequestParameters;
export interface PrivateEndpointConnectionsUpdateBodyParam {
    body: PrivateEndpointConnection;
}
export declare type PrivateEndpointConnectionsUpdateParameters = RequestParameters & PrivateEndpointConnectionsUpdateBodyParam;
export declare type PrivateEndpointConnectionsDeleteParameters = RequestParameters;
//# sourceMappingURL=parameters.d.ts.map