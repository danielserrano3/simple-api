import express, { Request, Response } from "express";
import asyncHandler from "../App/AsyncHandler";
import { getCountries } from "../Service/CountryService";

const countryRouter = express.Router();
const route = '/api/v1/country';

countryRouter.get(`${route}/`, asyncHandler(async (req: Request, res: Response) => {
  const resp = await getCountries();
  res.send(resp);
}));

export default countryRouter;