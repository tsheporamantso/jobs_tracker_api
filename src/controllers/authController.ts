import User from "../models/User";
import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "../middleware/async";
import { AsyncController } from "../types/asyncController";
import bcrypt from "bcryptjs";

export const register: AsyncController = asyncWrapper(async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const tempUser = { name, email, password: hashedPassword };

  const user = await User.create({ ...tempUser });
  console.log(user);

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
