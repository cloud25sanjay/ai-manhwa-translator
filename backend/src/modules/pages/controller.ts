import type { Request, Response } from "express";
import { createPageSchema } from "./schema.js";
import { createPage, getPageById, getPagesByChapterId } from "./service.js";

export const createPageController = async (req: Request, res: Response) => {
  const data = createPageSchema.parse(req.body);

  const page = await createPage(data);

  res.status(201).json({
    success: true,
    data: page,
  });
};

export const getPageController = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const page = await getPageById(req.params.id);

  res.json({
    success: true,
    data: page,
  });
};

export const getPagesByChapterController = async (
  req: Request<{ chapterId: string }>,
  res: Response,
) => {
  const pages = await getPagesByChapterId(req.params.chapterId);

  res.json({
    success: true,
    data: pages,
  });
};
