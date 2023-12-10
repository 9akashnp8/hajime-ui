import type { Request, Response } from "express";

import { saveTemplate } from "../../services/index.js";
import {
  createFailureResponse,
  createSuccessResponse,
} from "@9akashnp8/express-response-module";

export async function saveTemplateController(req: Request, res: Response) {
  const templateData = req.body;
  const saveResult = await saveTemplate(templateData);
  if (saveResult) {
    return createSuccessResponse(res, 200);
  }
  return createFailureResponse(res, 500, "template save failed");
}
