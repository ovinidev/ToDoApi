import { User } from 'src/app/entities/user/user';
import { UserRepository } from 'src/app/repositories/UserRepository';

export class UserRepositoryInMemory implements UserRepository {
  public users: User[] = [];

  async create({ email, name, password }: User): Promise<void> {
    const userToCreate = {
      id: '123456',
      name,
      email,
      password,
    } as User;

    this.users.push(userToCreate);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => {
      return user.email === email;
    });

    if (!user) return null;

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => {
      return user.id === id;
    });

    if (!user) return null;

    return user;
  }
}
