import { ChapterNotFoundError } from "../chapters/error.js";
import { ChapterModel } from "../chapters/model.js";
import { PageNotFoundError } from "./error.js";
import { PageModel } from "./model.js";
import type { CreatePageInput } from "./types.js";

export const createPage = async (data: CreatePageInput) => {
  const chapter = await ChapterModel.findById(data.chapterId);

  if (!chapter) {
    throw new ChapterNotFoundError(data.chapterId);
  }

  const page = await PageModel.create(data);

  return page;
};

export const getPageById = async (id: string) => {
  const page = await PageModel.findById(id);

  if (!page) {
    throw new PageNotFoundError(id);
  }

  return page;
};

export const getPagesByChapterId = async (chapterId: string) => {
  const chapter = await ChapterModel.findById(chapterId);

  if (!chapter) {
    throw new ChapterNotFoundError(chapterId);
  }

  const pages = await PageModel.find({ chapterId }).sort({ pageNumber: 1 });

  return pages;
};
