import type { Request, Response } from "express";
import { createTranslationSchema } from "./schema.js";
import { createTranslation, getTranslationById } from "./service.js";

export const createTranslationController = async (
  req: Request,
  res: Response,
) => {
  const data = createTranslationSchema.parse(req.body);

  const result = await createTranslation(data);

  res.status(result.created ? 201 : 200).json({
    success: true,
    data: result.translation,
  });
};

export const getTranslationController = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const translation = await getTranslationById(req.params.id);

  res.json({
    success: true,
    data: translation,
  });
};
