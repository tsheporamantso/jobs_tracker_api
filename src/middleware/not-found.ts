import { AsyncController } from "../types/asyncController";
import { StatusCodes } from "http-status-codes";

export const notFound: AsyncController = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    msg: "Resource/Route not found",
  });
};
