import express from "express";
import morgan from "morgan";
import thingsRouters from "./routers/thingsRouters.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/things", thingsRouters);

export default app;
