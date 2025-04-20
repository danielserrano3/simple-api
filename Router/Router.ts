import express, { Request, Response } from "express";
import countryRouter from "./CountryRouter";
import notFoundHandler from "../Middleware/Notfound";
import { ErrorHandler } from "../App/ErrorHandler";

const router = express.Router();

router.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send();
});

router.use('/', countryRouter);

router.use(notFoundHandler);
router.use(ErrorHandler);

export default router;