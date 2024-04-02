import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../../errors/AppErrors';
import { UsersRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UserRepository';
import { config as envConfig } from 'dotenv';
envConfig();
const { env } = process;

interface IPayload {
  id: string;
}

export async function ensureUserAdm(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError('Token missing', 401);

  const [, token] = authHeader.split(' ');

  try {
    const { id: userId } = verify(token, `${env.KEY_JWT}`) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(userId);

    if (!user?.isAdm) throw new AppError('permission denied', 403);

    next();
  } catch {
    throw new Error('Invalid token');
  }
}
