import { z } from "zod";
import { createPageSchema } from "./schema.js";

export type CreatePageInput = z.infer<typeof createPageSchema>;
