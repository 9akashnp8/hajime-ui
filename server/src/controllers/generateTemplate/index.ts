import type { Request, Response } from "express";
import {
  createFailureResponse,
  createSuccessResponse,
} from "@9akashnp8/express-response-module";

import { generateTemplate } from "../../services/index.js";

export async function generateTemplateController(req: Request, res: Response) {
  const { prompt } = req.body;
  const templateId = await generateTemplate(prompt, true);
  if (templateId) {
    return createSuccessResponse(res, 201, templateId);
  }
  return createFailureResponse(res, 500, "template generation failed");
}
