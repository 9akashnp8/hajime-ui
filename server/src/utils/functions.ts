import postcss from "postcss";
import tailwind from "tailwindcss";

import { mockHtml } from "./constants.js";

export async function generateCss(htmlSnippet: string) {
  const result = await postcss([
    tailwind({ content: [{ raw: htmlSnippet, extension: "html" }] }),
  ]).process("@tailwind base;@tailwind components;@tailwind utilities;", {
    from: undefined,
  });
  return result.css;
}

export function prepareFinalHtml(styles: string, htmlSnippet: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AI Generated Content</title>
        <style>
            ${styles}
        </style>
    </head>
    <body>
        ${htmlSnippet}
    </body>
    </html>
    `;
}

export async function generateComponentCode(prompt: string, mock: boolean = true) {
  if (mock) {
    const styles = await generateCss(mockHtml);
    const finalHtml = prepareFinalHtml(styles, mockHtml);
    return finalHtml;
  } else {
    return ""
  }
}