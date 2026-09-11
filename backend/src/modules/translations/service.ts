import { TranslationModel } from "./model.js";
import type { CreateTranslationInput } from "./types.js";
import { ChapterModel } from "../chapters/model.js";
import { ChapterNotFoundError } from "../chapters/error.js";
import { TranslationNotFoundError } from "./error.js";

export const createTranslation = async (data: CreateTranslationInput) => {
  const chapter = await ChapterModel.findById(data.chapterId);

  if (!chapter) {
    throw new ChapterNotFoundError(data.chapterId);
  }

  const existingTranslation = await TranslationModel.findOne({
    chapterId: data.chapterId,
    targetLanguage: data.targetLanguage,
  });

  if (existingTranslation) {
    return existingTranslation;
  }

  const translation = await TranslationModel.create(data);

  return translation;
};

export const getTranslationById = async (id: string) => {
  const translation = await TranslationModel.findById(id);

  if (!translation) {
    throw new TranslationNotFoundError(id);
  }

  return translation;
};
