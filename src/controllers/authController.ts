import User from "../models/User";
import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "../middleware/async";
import { AsyncController } from "../types/asyncController";
import { BadRequestError } from "../errors/bad-request";
import { UnauthenticatedError } from "../errors/unauthenticated";

export const register: AsyncController = asyncWrapper(async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    success: true,
    msg: "User registered in successfully",
    user: { name: user.name },
    token,
  });
});

export const login: AsyncController = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();

  res.status(StatusCodes.OK).json({
    success: true,
    msg: "User logged in successfully",
    user: { name: user.name },
    token,
  });
});
