import type { Request, Response } from "express";
import { createChapterSchema } from "./schema.js";
import { createChapter, getChapterById } from "./service.js";

export const createChapterController = async (req: Request, res: Response) => {
  const data = createChapterSchema.parse(req.body);

  const chapter = await createChapter(data);

  res.status(201).json({
    success: true,
    data: chapter,
  });
};

export const getChapterController = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const chapter = await getChapterById(req.params.id);

  res.json({
    success: true,
    data: chapter,
  });
};
