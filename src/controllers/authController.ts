import User from "../models/User";
import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "../middleware/async";
import { AsyncController } from "../types/asyncController";

export const register: AsyncController = asyncWrapper(async (req, res) => {
  const user = await User.create({ ...req.body });

  res.status(StatusCodes.CREATED).json({
    success: true,
    msg: "User registered in successfully",
    user,
  });
});

export const login: AsyncController = asyncWrapper(async (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    msg: "User logged in successfully",
  });
});
