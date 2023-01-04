import { UserRepositoryInMemory } from '../../../../../test/repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import { LoginUseCase } from './LoginUseCase';

describe('Login', () => {
  const userRepositoryInMemory = new UserRepositoryInMemory();
  const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  const loginUseCase = new LoginUseCase(userRepositoryInMemory);

  it('should be able to create a new user', async () => {
    const userToBeCreate = {
      name: 'Vinicius',
      email: 'vini@test.com',
      password: '123456',
    };

    await createUserUseCase.execute(userToBeCreate);

    const response = await loginUseCase.execute({
      email: userToBeCreate.email,
      password: userToBeCreate.password,
    });

    expect(response).toBeTruthy();
  });

  it('should not be able to login with incorrectly email', async () => {
    const userToBeCreate = {
      name: 'Vinicius',
      email: 'vini@test2.com',
      password: '123456',
    };

    await createUserUseCase.execute(userToBeCreate);

    expect(async () => {
      await loginUseCase.execute({
        email: userToBeCreate.email,
        password: 'incorrectly',
      });
    }).rejects.toThrow(Error);
  });

  it('should not be able to login with incorrectly password', async () => {
    const userToBeCreate = {
      name: 'Vinicius',
      email: 'vini@test3.com',
      password: '123456',
    };

    await createUserUseCase.execute(userToBeCreate);

    expect(async () => {
      await loginUseCase.execute({
        email: 'incorrectly@gmail.com',
        password: '123456',
      });
    }).rejects.toThrow(Error);
  });
});
