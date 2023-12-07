import Express from "express";
import cors from "cors";

import { generateComponentCode } from "./utils/functions.js";

const app = Express();
app.use(cors({origin: '*'}))

const PORT = 3000;

app.post("/generate", async (req, res) => {
  const generatedCode = await generateComponentCode("", true);
  res.set('Content-Type', 'text/html')
  res.send(Buffer.from(generatedCode))
});

app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`); // eslint-disable-line no-console
});
