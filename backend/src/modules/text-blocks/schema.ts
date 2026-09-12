import { z } from "zod";

const pointSchema = z.object({
  x: z.number().min(0).max(1),
  y: z.number().min(0).max(1),
});

const regionSchema = z.object({
  points: z.array(pointSchema).min(3),
});

export const createTextBlockSchema = z.object({
  pageId: z.string().regex(/^[a-f\d]{24}$/i, "Invalid page ID"),

  sourceText: z.string().trim().min(1),

  language: z.string().trim().min(2).max(10),

  confidence: z.number().min(0).max(1),

  region: regionSchema,
});
