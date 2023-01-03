import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from 'src/app/constants/secretKey';
import { UserRepository } from 'src/app/repositories/UserRepository';
import { LoginUserBody } from 'src/infra/http/dtos/loginUserBody';

@Injectable()
export class LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: LoginUserBody) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new Error('Email or password incorrectly');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error('Email or password incorrectly');

    const token = sign({}, SECRET_KEY, {
      subject: user.id,
      expiresIn: '1h',
    });

    const refreshToken = sign({}, SECRET_KEY, {
      subject: user.id,
      expiresIn: '30d',
    });

    const response = {
      email: user.email,
      name: user.name,
      token,
      refreshToken,
    };

    return response;
  }
}
