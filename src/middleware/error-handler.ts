import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { CustomErrorAPI } from "../errors/custom-error";
import mongoose from "mongoose";

export const errorHandlerMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  if (err instanceof CustomErrorAPI) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  if (err instanceof mongoose.Error.ValidationError) {
    const message = Object.values(err.errors).map((e) => e.message);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: message.join(", ") });
  }

  if ((err as any).code === 1100) {
    return res
      .status(StatusCodes.CONFLICT)
      .json({ msg: "Email already in use" });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg: "Something went wrong please try again",
  });
};
