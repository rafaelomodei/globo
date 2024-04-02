import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, isAdm } = request.body;

    const createUseCase = container.resolve(CreateUserUseCase);

    const user = await createUseCase.execute({
      email,
      password,
      isAdm,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
