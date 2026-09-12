import { Router } from "express";
import {
  createPageController,
  getPageController,
  getPagesByChapterController,
} from "./controller.js";

const router = Router();

router.post("/", createPageController);
router.get("/:id", getPageController);

router.get("/chapter/:chapterId", getPagesByChapterController);

export default router;
