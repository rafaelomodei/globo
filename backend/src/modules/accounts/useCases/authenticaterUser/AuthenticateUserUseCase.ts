import { compare } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../shared/errors/AppErrors';
import { IUsersRepository } from '../../repositories/IUserRepositories';
import { config as envConfig } from 'dotenv';
import {} from '../../dtos/IUserDTO';
import {
  IAuthenticateRequestDTO,
  IAuthenticateResponseDTO,
} from '../../dtos/IAuthenticateDTO';
envConfig();
const { env } = process;

@injectable()
class AuthenticateUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    email,
    password,
  }: IAuthenticateRequestDTO): Promise<IAuthenticateResponseDTO> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new AppError('Email or password incorrect', 401);

    const passwordMarch = await compare(password, user.password);
    if (!passwordMarch) throw new AppError('Email or password incorrect', 401);

    const token = sign({ id: user.id }, `${env.KEY_JWT}`, {
      expiresIn: '1d',
    });

    return {
      user: {
        email: user.email,
      },
      token,
    };
  }
}

export { AuthenticateUsersUseCase };
