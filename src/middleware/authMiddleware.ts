import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { UnauthenticatedError } from "../errors/unauthenticated";
import getEnvVariable from "../utils/env";

type AuthRequest = Request & {
  user?: {
    userId: string;
    name: string;
  };
};

interface JWTPayloadType {
  userId: string;
  name: string;
}

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(
      token,
      getEnvVariable("JWT_SECRET"),
    ) as JWTPayloadType;
    const authReq = req as AuthRequest;
    authReq.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError("Authentication invalid");
  }
};
