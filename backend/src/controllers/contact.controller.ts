import { Request, Response, NextFunction } from "express";
import Contact from "../models/Contact.js";
import { ApiError } from "../utils/ApiError.js";

export const createContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    if (!name || !email || !subject || !message) {
      throw new ApiError(
        400,
        "All fields are required"
      );
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message:
        "Your message has been sent successfully.",
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};