import type { Request, Response } from "express";
import { getHealthStatus } from "./service.js";

export const healthCheck = (_req: Request, res: Response) => {
  const result = getHealthStatus();
  res.json(result);
};
