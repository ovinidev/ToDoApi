import { UserRepositoryInMemory } from '../../../../../test/repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import { FindUserUseCase } from './FindUserUseCase';

describe('Find user', () => {
  const userRepositoryInMemory = new UserRepositoryInMemory();

  it('should be able to find user by email', async () => {
    const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    const findUserUseCase = new FindUserUseCase(userRepositoryInMemory);

    const userToBeCreate = {
      name: 'Vinicius',
      email: 'vini@test.com',
      password: '123456',
    };

    await createUserUseCase.execute(userToBeCreate);

    const userSearched = await findUserUseCase.execute('123456');

    expect(userSearched).toBeTruthy();
  });
});
