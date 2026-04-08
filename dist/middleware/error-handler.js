"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, _next) => {
    return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        msg: "Something went wrong please try again",
    });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
