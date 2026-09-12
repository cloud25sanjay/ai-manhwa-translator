import express from "express";
import healthRouter from "./health/route.js";
import chapterRouter from "./modules/chapters/route.js";
import { errorMiddleware } from "./infrastructure/middleware/error.middleware.js";
import translationRouter from "./modules/translations/route.js";
import pageRouter from "./modules/pages/route.js";

const app = express();

app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/chapters", chapterRouter);
app.use("/api/translations", translationRouter);
app.use("/api/pages", pageRouter);

app.use(errorMiddleware);

export default app;
