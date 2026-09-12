import { Router } from "express";

import {
  createTextBlockController,
  getTextBlockController,
  getTextBlocksByPageController,
} from "./controller.js";

const router = Router();

router.post("/", createTextBlockController);

router.get("/page/:pageId", getTextBlocksByPageController);

router.get("/:id", getTextBlockController);

export default router;
