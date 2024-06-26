import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import AppDataSource from '../typeorm/dataSource';
import { AppError } from '../../errors/AppErrors';
import { router } from './routes';
import cors from 'cors';
import './../../container';

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333);
