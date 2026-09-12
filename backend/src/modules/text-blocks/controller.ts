import type { Request, Response } from "express";
import { createTextBlockSchema } from "./schema.js";
import {
  createTextBlock,
  getTextBlockById,
  getTextBlocksByPageId,
} from "./service.js";
import { success } from "zod";

export const createTextBlockController = async (
  req: Request,
  res: Response,
) => {
  const data = createTextBlockSchema.parse(req.body);

  const textBlock = await createTextBlock(data);

  res.status(201).json({
    success: true,
    data: textBlock,
  });
};

export const getTextBlockController = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const textBlock = await getTextBlockById(req.params.id);

  res.json({
    success: true,
    data: textBlock,
  });
};

export const getTextBlocksByPageController = async (
  req: Request<{ pageId: string }>,
  res: Response,
) => {
  const textBlocks = await getTextBlocksByPageId(req.params.pageId);

  res.json({
    success: true,
    data: textBlocks,
  });
};
