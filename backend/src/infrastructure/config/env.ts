import { z } from "zod";

const envSchema = z.object({
  port: z.coerce.number().default(5000),
  mongodbUri: z.string().min(1),
});

const parsedEnv = envSchema.parse({
  port: process.env.PORT,
  mongodbUri: process.env.MONGODB_URI,
});

export const env = parsedEnv;
