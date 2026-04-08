import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

export const errorHandlerMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  _next,
) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg: "Something went wrong please try again",
  });
};
