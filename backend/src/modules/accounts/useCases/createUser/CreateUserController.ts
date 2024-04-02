import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createUseCase = container.resolve(CreateUserUseCase);

    const user = await createUseCase.execute({
      email,
      password,
      isAdm: false
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
