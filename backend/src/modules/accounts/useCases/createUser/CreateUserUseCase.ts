import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
import { IUsersRepository } from '../../repositories/IUserRepositories';
import { IUserDTO } from '../../dtos/IUserDTO';
import { AppError } from '../../../../shared/errors/AppErrors';
import { User } from '../../infra/typeorm/entities/User';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: IUserDTO): Promise<User> {
    const { email, password } = data;

    console.info('CreateUserUseCase::email: ', email);
    console.info('CreateUserUseCase::password: ', password);

    const emailUser = email.toLowerCase();
    const userAlreadyExists = await this.usersRepository.findByEmail(emailUser);

    if (userAlreadyExists) throw new AppError('User already exists', 409);

    const passwordHash = await hash(password, 8);

    const user = {
      password: passwordHash,
      email: email.toLowerCase(),
    };

    const userCreated = await this.usersRepository.create(user);

    console.info('\nuserCreated: ', userCreated);
    return userCreated;
  }
}

export { CreateUserUseCase };
