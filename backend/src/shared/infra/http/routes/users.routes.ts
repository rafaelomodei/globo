import { Router } from 'express';
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/CreateUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/', ensureAuthenticated, createUserController.handle);

export { usersRoutes };
