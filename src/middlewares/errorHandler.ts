import { Request, Response, NextFunction } from 'express';
import { MovieError } from '../utils/movieError';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof MovieError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error('An internal error occurred:', err.message);

  res.status(500).json({ error: 'Internal server error' });
};
