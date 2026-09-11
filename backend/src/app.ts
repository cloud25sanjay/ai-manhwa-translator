import express from "express";
import healthRouter from "./health/route.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import chapterRouter from "./chapters/route.js";

const app = express();

app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/chapters", chapterRouter);

app.use(errorMiddleware);

export default app;
