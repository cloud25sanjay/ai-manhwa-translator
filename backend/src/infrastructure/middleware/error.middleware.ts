import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ChapterNotFoundError } from "../../modules/chapters/error.js";
import { TranslationNotFoundError } from "../../modules/translations/error.js";

export const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation Failed",
      errors: error.issues,
    });
  }

  if (error.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  if (error instanceof ChapterNotFoundError) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }

  if (error instanceof TranslationNotFoundError) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }

  console.log(error);

  res.status(500).json({
    success: false,
    message: "Internal server Error",
  });
};
