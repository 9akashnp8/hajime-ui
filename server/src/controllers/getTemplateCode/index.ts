import type { Request, Response } from "express";

import { getTemplate } from "../../services/index.js";
import {
  createErrorResponse,
  createSuccessResponse,
} from "@9akashnp8/express-response-module";

export default async function getTemplateController(
  req: Request,
  res: Response,
) {
  const { templateId = "" } = req.params;
  const template = await getTemplate(templateId);
  if (template) {
    return createSuccessResponse(res, 200, template.html);
  }
  return createErrorResponse(res, 404, "template not found");
}
