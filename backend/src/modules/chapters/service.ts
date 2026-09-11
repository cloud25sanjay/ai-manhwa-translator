import { ChapterNotFoundError } from "./error.js";
import { ChapterModel } from "./model.js";
import type { CreateChapterInput } from "./types.js";

export const createChapter = async (data: CreateChapterInput) => {
  const chapter = await ChapterModel.create(data);

  return chapter;
};

export const getChapterById = async (id: string) => {
  const chapter = await ChapterModel.findById(id);

  if (!chapter) {
    throw new ChapterNotFoundError(id);
  }

  return chapter;
};
