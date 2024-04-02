import { Repository } from 'typeorm';
import { IUsersRepository } from '../../../repositories/IUserRepositories';
import { User } from '../entities/User';
import AppDataSource from '../../../../../shared/infra/typeorm/dataSource';
import { IUserDTO } from '../../../dtos/IUserDTO';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create(data: IUserDTO): Promise<User> {
    const { email, password } = data;

    const user = this.repository.create({
      email,
      password,
      isAdm: false,
    });

    const userCreated = await this.repository.save(user);

    return userCreated;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { email },
    });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { id },
    });

    return user;
  }
}

export { UsersRepository };
