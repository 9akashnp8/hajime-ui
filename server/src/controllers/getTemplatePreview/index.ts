import type { Request, Response } from "express";
import { createErrorResponse } from "@9akashnp8/express-response-module";

import { getTemplate } from "../../services/index.js";
import { generateCss, prepareFinalHtml } from "../../utils/functions.js";

export async function getTemplatePreviewController(
  req: Request,
  res: Response,
) {
  const templateId = req.params.templateId!;
  const template = await getTemplate(templateId);
  if (template) {
    let { html, styles } = template;
    styles = await generateCss(html); // Temporary
    const finalHtml = prepareFinalHtml(styles!, html!);
    res.set("Content-Type", "text/html");
    return res.send(finalHtml);
  }
  return createErrorResponse(res, 404, "template not found");
}
