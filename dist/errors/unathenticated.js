"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthenticatedError = void 0;
const http_status_codes_1 = require("http-status-codes");
const custom_error_1 = require("./custom-error");
class UnauthenticatedError extends custom_error_1.CustomErrorAPI {
    constructor(message, statusCode = http_status_codes_1.StatusCodes.UNAUTHORIZED) {
        super(message, statusCode);
    }
}
exports.UnauthenticatedError = UnauthenticatedError;
