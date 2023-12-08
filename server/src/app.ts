import Express from "express";
import cors from "cors";
import "dotenv/config";

import { getTemplate } from "./services/index.js";
import {
  generateComponentCode,
  generateCss,
  prepareFinalHtml,
} from "./utils/functions.js";

const app = Express();
app.use(cors({ origin: "*" }));

const PORT = 3000;

app.get("/templates/:id/preview", async (req, res) => {
  const objectId = req.params.id!;
  const template = await getTemplate(objectId, true);
  let { html, styles } = template;
  if (styles === "") {
    styles = await generateCss(html);
  }
  const finalHtml = prepareFinalHtml(styles, html);

  res.set("Content-Type", "text/html");
  res.send(finalHtml);
});

app.post("/generate", async (req, res) => {
  const generatedCode = await generateComponentCode("", true);
  res.set("Content-Type", "text/html");
  res.send(Buffer.from(generatedCode));
});

app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`); // eslint-disable-line no-console
});
