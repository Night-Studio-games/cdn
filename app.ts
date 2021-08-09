import express from 'express';
import { json, urlencoded } from 'body-parser';

const app = express();

app.set("port", 3000 || process.env.PORT);

app.use(urlencoded({ extended: false }));
app.use(json());

export default app;