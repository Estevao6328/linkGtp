import { getAccessToken } from "../controllers/httpController";

const { Router } = require("express");

const callbackRouter = Router();

callbackRouter.get("/callback", getAccessToken);

export = callbackRouter;
