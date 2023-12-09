import Express from "express";

import { getTemplatePreviewController } from "./controllers/getTemplatePreview/index.js";
import { saveTemplateController } from "./controllers/saveTemplate/index.js";
import { generateTemplateController } from "./controllers/generateTemplate/index.js";

export const router = Express.Router();

router.get("/templates/:templateId/preview", getTemplatePreviewController);
router.post("/templates/", saveTemplateController);
router.post("/templates/generate/", generateTemplateController);
