import type { NextFunction, Request, Response } from "express";

export const notFoundHandler = () => {
  throw new Error("Resource not found");
};

export const errorHandler = (error: Error, _req: Request, res: Response, next: NextFunction) => {
  void next;
  res.status(404).json({ message: error.message });
};
