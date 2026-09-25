import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError.js";

export const errorHandler = (
  err: Error | ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err);

  const statusCode =
    err instanceof ApiError
      ? err.statusCode
      : 500;

  res.status(statusCode).json({
    success: false,
    message:
      err.message || "Internal Server Error",
  });
};