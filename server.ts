import { config } from "dotenv";
config();

import app from "./app";

app.listen(app.get("port"), () =>
  console.log("Listening on port %d", app.get("port"))
);
