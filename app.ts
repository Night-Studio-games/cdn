import express from "express";
import { json, urlencoded } from "body-parser";

import gamesRoute from "./routes/games.route";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/games", gamesRoute);

export default app;
