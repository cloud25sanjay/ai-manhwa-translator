import { z } from "zod";

export const createTranslationSchema = z.object({
  chapterId: z.string().regex(/^[a-f\d]{24}$/i, "Invalid chapter ID"),

  targetLanguage: z.string().trim().min(2).max(10),
});
