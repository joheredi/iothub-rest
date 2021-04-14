"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
const core_client_1 = require("@azure-rest/core-client");
function IotHubClient(credentials, options = {}) {
    var _a;
    const baseUrl = (_a = options.baseUrl) !== null && _a !== void 0 ? _a : "https://management.azure.com";
    options = Object.assign(Object.assign({}, options), { credentials: {
            scopes: ["https://management.azure.com/.default"]
        } });
    return core_client_1.getClient(baseUrl, credentials, options);
}
exports.default = IotHubClient;
