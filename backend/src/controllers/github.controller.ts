import {
  Request,
  Response,
  NextFunction,
} from "express";

import {
  getGitHubProfile,
} from "../services/github.service.js";

export const getGitHubData = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getGitHubProfile();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};