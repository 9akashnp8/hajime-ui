import type { Request, Response } from "express";

import { saveTemplate } from "../../services/index.js";

export async function saveTemplateController(req: Request, res: Response) {
  const templateData = req.body;
  const saveResult = await saveTemplate(templateData);
  if (saveResult) {
    return res
      .status(201)
      .json({ status: "success", message: "template saved" });
  }
  return res
    .status(500)
    .json({ status: "fail", message: "template save fail" });
}
