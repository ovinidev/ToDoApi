import { randomUUID } from 'crypto';
import { User, UserProps } from './user';

describe('User', () => {
  it('should be able to create a user', () => {
    const userToBeCreate = {
      id: randomUUID(),
      name: 'Vinicius',
      email: 'vini@gmail.com',
      password: '123456',
    } as UserProps;

    const user = new User(userToBeCreate);

    expect(user).toBeTruthy();
  });
});
