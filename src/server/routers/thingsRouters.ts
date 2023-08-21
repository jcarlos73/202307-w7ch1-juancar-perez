import express from "express";
import { getThings } from "../controllers/thingsControllers.js";

const thingsRouters = express.Router();

thingsRouters.get("/", getThings);

export default thingsRouters;
