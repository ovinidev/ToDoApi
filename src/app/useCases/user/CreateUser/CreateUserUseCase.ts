import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { User } from 'src/app/entities/user/user';
import { UserRepository } from 'src/app/repositories/UserRepository';
import { CreateUserBody } from 'src/infra/http/dtos/createUserBody';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, name, password }: CreateUserBody) {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error('User already exists.');

    const hashPassword = await hash(password, 8);

    const user = new User({
      email,
      name,
      password: hashPassword,
    });

    await this.userRepository.create(user);

    return {
      message: 'User created successfully.',
    };
  }
}
