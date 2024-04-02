import { Router } from 'express';
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/CreateUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureUserAdm } from '../middlewares/ensureUserAdm';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post(
  '/',
  ensureAuthenticated,
  ensureUserAdm,
  createUserController.handle
);

export { usersRoutes };
