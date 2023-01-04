import { UserRepositoryInMemory } from '../../../../../test/repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import { LoginUseCase } from '../Login/LoginUseCase';
import { RefreshTokenUseCase } from './RefreshTokenUseCase';

describe('Refresh token', () => {
  const userRepositoryInMemory = new UserRepositoryInMemory();
  const createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  const loginUseCase = new LoginUseCase(userRepositoryInMemory);
  const refreshTokenUseCase = new RefreshTokenUseCase();

  it('should be able to create a new user', async () => {
    const userToBeCreate = {
      name: 'Vinicius',
      email: 'vini@test.com',
      password: '123456',
    };

    await createUserUseCase.execute(userToBeCreate);

    const { refreshToken, token } = await loginUseCase.execute({
      email: userToBeCreate.email,
      password: userToBeCreate.password,
    });

    const newRefreshToken = await refreshTokenUseCase.execute(
      `Bearer ${refreshToken}`,
    );

    expect(newRefreshToken).toBeTruthy();
    expect(newRefreshToken).not.toEqual(token);
  });
});
