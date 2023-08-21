import express from "express";
import { getThing, getThings } from "../controllers/thingsControllers.js";

const thingsRouters = express.Router();

thingsRouters.get("/", getThings);
thingsRouters.get("/:id", getThing);

export default thingsRouters;
