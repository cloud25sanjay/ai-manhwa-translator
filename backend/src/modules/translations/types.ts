import { z } from "zod";
import { createTranslationSchema } from "./schema.js";

export type CreateTranslationInput = z.infer<typeof createTranslationSchema>;
