import express from "express";
import morgan from "morgan";
import {
  endpointNotFound,
  generalErrorHandler,
} from "./controllers/middlewares/errors.js";
import { pingController } from "./controllers/ping/pingController.js";
import thingsRouters from "./routers/thingsRouters.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingController);

app.use("/things", thingsRouters);

app.use(endpointNotFound);
app.use(generalErrorHandler);

export default app;
