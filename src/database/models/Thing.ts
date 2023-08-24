import { Schema, model } from "mongoose";
import { type ThingStructure } from "./types";

const thingSchema = new Schema<ThingStructure>({
  description: {
    type: String,
    required: true,
  },
});

const Thing = model("Thing", thingSchema, "things");

export default Thing;
