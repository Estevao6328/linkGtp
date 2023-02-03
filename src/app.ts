import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import callbackRouter from "./http/routes/index.routes";
import { startProcess } from "./helpers/startProcess";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("tiny"));
app.use(callbackRouter);

app.listen(process.env.PORT, () => {
  startProcess();
});
