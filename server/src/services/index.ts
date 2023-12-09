import shortUUID from "short-uuid";

import type { Template, TemplateSaveBody } from "../types.js";

import { db } from "../db/index.js";
import { mockHtml, mockTemplate } from "../utils/constants.js";
import { generateCss } from "../utils/functions.js";

export async function getTemplate(
  templateId: string,
  mock: boolean = false,
): Promise<Template | null> {
  if (mock) {
    return mockTemplate;
  }
  const template = await db.collection("templates").findOne({ templateId });
  if (template) {
    return {
      templateId: template.templateId,
      html: template.html,
      styles: template.styles,
    };
  }
  return null;
}

export async function saveTemplate(
  templateData: TemplateSaveBody,
): Promise<string> {
  const templateId = shortUUID.generate();
  const result = await db
    .collection("templates")
    .insertOne({ templateId, ...templateData });
  if (result.insertedId) {
    return templateId;
  }
  return "";
}

export async function generateTemplate(
  prompt: string,
  mock: boolean = false,
): Promise<string | null> {
  const generatedHtml = mock ? mockHtml : ""; // Replace null with call to ai
  const css = await generateCss(generatedHtml);
  const templateData = {
    html: generatedHtml,
    styles: css,
  };
  const templateId = await saveTemplate(templateData);
  if (templateId) {
    return templateId;
  }
  return null;
}
