import { Request, Response, NextFunction } from 'express';
import { ErrUnauthorizedService } from '../utils/movieError';

export const serviceAuth = (req: Request, res: Response, next: NextFunction) => {
  const clientId = req.headers['x-client-id'];
  const secret = req.headers['x-client-secret'];

  if (
    clientId === (process.env.CLIENT_ID || 'user-service') &&
    secret === (process.env.CLIENT_SECRET || 'user-super-secret')
  ) {
    return next();
  }
  throw new ErrUnauthorizedService();
};
