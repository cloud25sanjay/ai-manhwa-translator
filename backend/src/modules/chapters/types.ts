import type z from "zod";
import type { createChapterSchema } from "./schema.js";

export type CreateChapterInput = z.infer<typeof createChapterSchema>;
