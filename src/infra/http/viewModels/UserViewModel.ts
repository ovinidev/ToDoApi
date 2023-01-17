import { User } from 'src/app/entities/user/user';

export interface UserViewModelProps {
  name: string;
  email: string;
}

export class UserViewModel {
  static toHTTP(user: User): UserViewModelProps {
    return {
      name: user.name,
      email: user.email,
    };
  }
}
