import postcss from "postcss";
import tailwind from "tailwindcss";

import { mockHtml } from "./constants.js";

/**
 * Uses postcss to generate appropriate css styles based on
 * given tailwind utility classes. Credits:
 * https://github.com/tailwindlabs/tailwindcss/discussions/1442
 * @param htmlSnippet htmlsnippet that cotains the tailwind utility
 * classes
 * @returns
 */
export async function generateCss(htmlSnippet: string) {
  const result = await postcss([
    tailwind({ content: [{ raw: htmlSnippet, extension: "html" }] }),
  ]).process("@tailwind base;@tailwind components;@tailwind utilities;", {
    from: undefined, // eslint-disable-line no-undefined
  });
  return result.css;
}

/**
 * Takes style generated from tailwind classes & the html snippet generated
 * by AI to combine to final HTML document for preview on client.
 * @param styles styles generated by postcss for tailwind utility classes
 * @param htmlSnippet htmlsnippet generated by AI
 * @returns
 */
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

/**
 * Takes user prompt on component to be generated and returns
 * html snippet generated by AI.
 * @param prompt user prompt of component required to be generated
 * @param mock return mock component for faster cost + fast DX
 * @returns
 */
export async function generateComponentCode(
  prompt: string,
  mock: boolean = true,
) {
  if (mock) {
    const styles = await generateCss(mockHtml);
    const finalHtml = prepareFinalHtml(styles, mockHtml);
    return finalHtml;
  } 
    // AI Generation
    return "";
  
}
