import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utils/response';
import { NODE_ENV } from '../utils/env';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('ERROR:', err.message);

  const statusCode = err.message.includes('not founded') ? 404 : 400;

  errorResponse(res, err.message || 'error founded', statusCode, 
    NODE_ENV === 'development' ? { stack: err.stack } : null
  );
};