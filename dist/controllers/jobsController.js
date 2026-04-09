"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.createJob = exports.getJob = exports.getAllJobs = void 0;
const http_status_codes_1 = require("http-status-codes");
const async_1 = require("../middleware/async");
exports.getAllJobs = (0, async_1.asyncWrapper)(async (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        msg: "Get all jobs",
    });
});
exports.getJob = (0, async_1.asyncWrapper)(async (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        msg: "get a job",
    });
});
exports.createJob = (0, async_1.asyncWrapper)(async (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        msg: "create job",
    });
});
exports.updateJob = (0, async_1.asyncWrapper)(async (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        msg: "update job",
    });
});
exports.deleteJob = (0, async_1.asyncWrapper)(async (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        msg: "delete job",
    });
});
