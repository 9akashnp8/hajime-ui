import type { Request, Response } from "express";

import { generateTemplate } from "../../services/index.js";

export async function generateTemplateController(req: Request, res: Response) {
  const { prompt } = req.body;
  const templateId = await generateTemplate(prompt, true);
  if (templateId) {
    return res.json({
      status: "success",
      message: "template generated and saved",
      data: templateId,
    });
  }
  return res
    .status(500)
    .json({ status: "fail", message: "template generation failed" });
}
