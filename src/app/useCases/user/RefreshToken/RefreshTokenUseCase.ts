import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../../../../app/constants/secretKey';

interface IRefreshTokenVerified {
  sub: string;
}

@Injectable()
export class RefreshTokenUseCase {
  async execute(refreshToken: string) {
    const [, refresh_token] = refreshToken.split(' ');

    const { sub: id } = verify(
      refresh_token,
      SECRET_KEY,
    ) as IRefreshTokenVerified;

    const token = sign({}, SECRET_KEY, {
      subject: id,
      expiresIn: '1h',
    });

    return { token };
  }
}
