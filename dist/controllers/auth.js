"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const http_status_codes_1 = require("http-status-codes");
const async_1 = require("../middleware/async");
exports.register = (0, async_1.asyncWrapper)(async (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        msg: "User registered in successfully",
    });
});
exports.login = (0, async_1.asyncWrapper)(async (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        msg: "User logged in successfully",
    });
});
