import express from "express";
import { json, urlencoded } from "body-parser";

import gamesRoute from "./routes/games.route";

const app = express();

app.set("port", 3000 || process.env.PORT);

app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/games", gamesRoute);

export default app;
