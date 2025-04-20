import { Request, Response } from "express";

export default function notFoundHandler(req: Request, res: Response) {
  return res.status(404).json({
    message: 'Route does not exist',
    method: req.method,
    path: req.originalUrl,
  });
}