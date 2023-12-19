import Express from "express";

import { getTemplatePreviewController } from "./controllers/getTemplatePreview/index.js";
import { saveTemplateController } from "./controllers/saveTemplate/index.js";
import { generateTemplateController } from "./controllers/generateTemplate/index.js";
import getTemplateController from "./controllers/getTemplateCode/index.js";

export const router = Express.Router();

router.get("/templates/:templateId/preview", getTemplatePreviewController);
router.get("/templates/:templateId/", getTemplateController);
router.post("/templates/", saveTemplateController);
router.post("/templates/generate/", generateTemplateController);
