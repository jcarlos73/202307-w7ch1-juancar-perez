import { type Request, type Response } from "express";
import { things } from "../../data/thingsData.js";

export const getThings = (_req: Request, res: Response) => {
  console.log("Request getThings to get all things");

  res.status(200).json({ things });
};

export const getThing = (req: Request, res: Response) => {
  console.log("Request getThing to get one thing");

  const { id } = req.params;

  const thinById = things.find((thing) => thing.id === +id);

  res.status(200).json({ thing: thinById });
};

export const deleteThingController = (req: Request, res: Response) => {
  const { id } = req.params;

  const thingToDeletePosition = things.findIndex((thing) => thing.id === +id);
  things.splice(thingToDeletePosition, 1);

  res.status(200).json({ message: "Thing Deleted" });
};
