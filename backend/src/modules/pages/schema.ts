import { z } from "zod";

export const createPageSchema = z.object({
  chapterId: z.string().regex(/^[a-f\d]{24}$/i, "Invalid chapter ID"),

  pageNumber: z.number().int().positive(),

  imagePath: z.string().trim().min(1).max(500),
});
