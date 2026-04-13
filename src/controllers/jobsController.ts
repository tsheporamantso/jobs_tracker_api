import Job from "../models/Job";
import { Request } from "express";
import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "../middleware/async";
import { NotFoundError } from "../errors/not-found";
import { AsyncController } from "../types/asyncController";

export const getAllJobs: AsyncController = asyncWrapper(async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user?.userId });

  res.status(StatusCodes.OK).json({
    success: true,
    jobs,
    count: jobs.length,
  });
});

export const getJob: AsyncController = asyncWrapper(async (req, res) => {
  const { id: jobId } = req.params;
  const job = await Job.findOne({ _id: jobId, createdBy: req.user?.userId });

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({
    success: true,
    job,
  });
});

export const createJob: AsyncController = asyncWrapper(
  async (req: Request, res) => {
    req.body.createdBy = req.user?.userId;
    const job = await Job.create(req.body);

    res.status(StatusCodes.CREATED).json({ job });
  },
);

export const updateJob: AsyncController = asyncWrapper(async (req, res) => {
  const { id: jobId } = req.params;
  const job = await Job.findOneAndUpdate(
    {
      _id: jobId,
      createdBy: req.user?.userId,
    },
    req.body,
    {
      returnDocument: "after",
      runValidators: true,
    },
  );

  if (!job) {
    throw new NotFoundError(`No job with id: ${jobId}`);
  }

  res.status(StatusCodes.OK).json({
    success: true,
    job,
  });
});

export const deleteJob: AsyncController = asyncWrapper(async (req, res) => {
  const { id: jobId } = req.params;
  const job = await Job.findOneAndDelete({
    _id: jobId,
    createdBy: req.user?.userId,
  });
  if (!job) {
    throw new NotFoundError(`no job with id: ${jobId}`);
  }
  res.status(StatusCodes.OK).json({
    success: true,
    msg: "delete job successfully",
  });
});
