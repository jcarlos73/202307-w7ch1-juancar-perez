import express from "express";
import thingsRouters from "./routers/thingsRouters.js";

const app = express();

app.use("/things", thingsRouters);

export default app;
