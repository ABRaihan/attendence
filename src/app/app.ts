import express from "express";
import { errorHandler, notFoundHandler } from "./error";
import { middlewares } from "./middleware";
import router from "./routes";

export const app = express();

app.use(middlewares);
app.use(router);
app.use(notFoundHandler);
app.use(errorHandler);
