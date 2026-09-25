import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const error = new Error(
    `Route not found: ${req.method} ${req.originalUrl}`
  );

  next(error);
};