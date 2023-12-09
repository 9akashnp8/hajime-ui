import Express from "express";

import { getTemplatePreviewController } from "./controllers/getTemplatePreview/index.js";

export const router = Express.Router();

router.get("/templates/:templateId/preview", getTemplatePreviewController);
