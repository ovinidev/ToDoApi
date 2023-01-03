import { User, UserProps } from '../entities/user/user';

export abstract class UserRepository {
  abstract create(user: UserProps): Promise<void>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findById(id: string): Promise<User | null>;
}
