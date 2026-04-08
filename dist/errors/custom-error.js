"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomError = exports.CustomErrorAPI = void 0;
class CustomErrorAPI extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.CustomErrorAPI = CustomErrorAPI;
const createCustomError = (msg, statusCode) => {
    return new CustomErrorAPI(msg, statusCode);
};
exports.createCustomError = createCustomError;
