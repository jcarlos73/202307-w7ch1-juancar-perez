import { type Request, type Response } from "express";
import { things } from "../../data/thingsData.js";

export const getThings = (_req: Request, res: Response) => {
  console.log("Request getThings to get all things");

  res.status(200).json({ things });
};

export const getThing = (req: Request, res: Response) => {
  console.log("Request getThing to get one thing");

  const { idThing } = req.params;

  res
    .status(200)
    .json({ thing: things.find((thing) => thing.id === Number(idThing)) });
};
