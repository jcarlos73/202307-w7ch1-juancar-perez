import { type Request, type Response } from "express";
import { getThings } from "./thingsControllers.js";

const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("Given a getThings controller", () => {
  describe("When it receives a response", () => {
    const req: Partial<Request> = {};
    const expectedStatusCode = 200;
    test("Then it should call its method status with 200", () => {
      getThings(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json", () => {
      getThings(req as Request, res as Response);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
