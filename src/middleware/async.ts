import { NextFunction, Request, Response } from "express";
import { AsyncController } from "../types/asyncController";

export const asyncWrapper = async (fn: AsyncController) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
