import { container } from 'tsyringe';
import { IUsersRepository } from '../../modules/accounts/repositories/IUserRepositories';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UserRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
