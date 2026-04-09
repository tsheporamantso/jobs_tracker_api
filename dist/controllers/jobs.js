"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllJobs = void 0;
const async_1 = require("../middleware/async");
const http_status_codes_1 = require("http-status-codes");
exports.getAllJobs = (0, async_1.asyncWrapper)(async (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        msg: "Get all jobs",
    });
});
