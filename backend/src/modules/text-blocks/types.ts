import { z } from "zod";
import { createTextBlockSchema } from "./schema.js";

export type CreateTextBlockInput = z.infer<typeof createTextBlockSchema>;
