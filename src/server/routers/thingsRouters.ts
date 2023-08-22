import express from "express";
import {
  deleteThingController,
  getThing,
  getThings,
} from "../controllers/thingsControllers.js";

const thingsRouters = express.Router();

thingsRouters.get("/", getThings);
thingsRouters.get("/:id", getThing);
thingsRouters.delete("/:id", deleteThingController);

export default thingsRouters;
