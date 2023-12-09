import type { Template } from "../types.js";

import { db } from "../db/index.js";
import { mockTemplate } from "../utils/constants.js";

export async function getTemplate(
  templateId: string,
  mock: boolean = false,
): Promise<Template | null> {
  if (mock) {
    return mockTemplate;
  }
  const template = await db
    .collection("templates")
    .findOne({ template_id: templateId });
  if (template) {
    return {
      templateId: template.templateId,
      html: template.html,
      styles: template.styles,
    };
  }
  return null;
}
