import express, { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';
import 'reflect-metadata';
import routes from './routes/index';

import '@shared/infra/typeorm';

const app = express();

app.use('/', routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'pai ta off 😔',
  });
});

app.listen(3333, () => {
  console.log('O Pai ta on 😎📻');
});