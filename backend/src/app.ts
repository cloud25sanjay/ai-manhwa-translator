import express from "express";
import healthRouter from "./health/route.js";
import chapterRouter from "./modules/chapters/route.js";
import { errorMiddleware } from "./infrastructure/middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/chapters", chapterRouter);

app.use(errorMiddleware);

export default app;
