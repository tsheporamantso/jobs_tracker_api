import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "../middleware/async";
import { AsyncController } from "../types/asyncController";

export const getAllJobs: AsyncController = asyncWrapper(async (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    msg: "Get all jobs",
  });
});

export const getJob: AsyncController = asyncWrapper(async (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    msg: "get a job",
  });
});

export const createJob: AsyncController = asyncWrapper(async (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    msg: "create job",
  });
});

export const updateJob: AsyncController = asyncWrapper(async (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    msg: "update job",
  });
});

export const deleteJob: AsyncController = asyncWrapper(async (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    msg: "delete job",
  });
});
