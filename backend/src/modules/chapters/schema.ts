import { z } from "zod";

const commonChapterFields = {
  title: z.string().trim().min(1).max(200),

  chapterNumber: z.number().int().positive(),
};

export const createChapterSchema = z.discriminatedUnion("sourceType", [
  z.object({
    ...commonChapterFields,

    sourceType: z.literal("url"),

    sourceUrl: z.string().url(),
  }),

  z.object({
    ...commonChapterFields,

    sourceType: z.literal("upload"),
  }),
]);
