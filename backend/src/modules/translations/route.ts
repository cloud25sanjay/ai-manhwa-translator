import { Router } from "express";
import {
  createTranslationController,
  getTranslationController,
} from "./controller.js";

const router = Router();

router.post("/", createTranslationController);
router.get("/:id", getTranslationController);

export default router;
