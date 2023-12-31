import Express from "express";
import cors from "cors";
import "dotenv/config";

import { router } from "./routes.js";

const app = Express();
app.use(Express.json());
app.use(cors({ origin: "*" }));
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`); // eslint-disable-line no-console
});
