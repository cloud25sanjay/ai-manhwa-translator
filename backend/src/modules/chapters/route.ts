import { Router } from "express";
import { createChapterController, getChapterController } from "./controller.js";

const router = Router();

router.post("/", createChapterController);
router.get("/:id", getChapterController);

export default router;
