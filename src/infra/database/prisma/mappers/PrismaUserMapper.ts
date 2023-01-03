import { User as RawUser } from '@prisma/client';
import { User } from 'src/app/entities/user/user';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User({
      email: raw.email,
      name: raw.name,
      password: raw.password,
      id: raw.id,
    });
  }
}
