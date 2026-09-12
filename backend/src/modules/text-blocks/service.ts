import { PageNotFoundError } from "../pages/error.js";
import { PageModel } from "../pages/model.js";
import { TextBlockNotFoundError } from "./error.js";
import { TextBlockModel } from "./model.js";
import type { CreateTextBlockInput } from "./types.js";

export const createTextBlock = async (data: CreateTextBlockInput) => {
  const page = await PageModel.findById(data.pageId);

  if (!page) {
    throw new PageNotFoundError(data.pageId);
  }

  const textBlock = await TextBlockModel.create(data);

  return textBlock;
};

export const getTextBlockById = async (id: string) => {
  const textBlock = await TextBlockModel.findById(id);

  if (!textBlock) {
    throw new TextBlockNotFoundError(id);
  }

  return textBlock;
};

export const getTextBlocksByPageId = async (pageId: string) => {
  const page = await PageModel.findById(pageId);

  if (!page) {
    throw new PageNotFoundError(pageId);
  }

  const textBlocks = await TextBlockModel.find({ pageId }).sort({
    createdAt: 1,
  });

  return textBlocks;
};
