import { UserRepositoryInMemory } from '../../../../../test/repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';

describe('Create user', () => {
  const userRepositoryInMemory = new UserRepositoryInMemory();

  it('should be able to create a new user', async () => {
    const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);

    const userToBeCreate = {
      name: 'Vinicius',
      email: 'vini@test.com',
      password: '123456',
    };

    const userCreated = await createUserUseCase.execute(userToBeCreate);

    expect(userCreated).toBeTruthy();
  });

  it('should not be able to create a new user existent', async () => {
    const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);

    const userToBeCreate = {
      name: 'Vinicius',
      email: 'vini@test.com',
      password: '123456',
    };

    expect(async () => {
      await createUserUseCase.execute(userToBeCreate);
    }).rejects.toThrow(Error);
  });
});
