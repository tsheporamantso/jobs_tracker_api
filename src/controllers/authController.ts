import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "../middleware/async";
import { AsyncController } from "../types/asyncController";

export const register: AsyncController = asyncWrapper(async (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    msg: "User registered in successfully",
  });
});

export const login: AsyncController = asyncWrapper(async (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    msg: "User logged in successfully",
  });
});
