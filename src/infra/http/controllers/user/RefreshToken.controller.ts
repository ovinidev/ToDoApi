import { Controller, Get, Headers, HttpException } from '@nestjs/common';
import { LoginUseCase } from 'src/app/useCases/user/Login/LoginUseCase';
import { RefreshTokenUseCase } from 'src/app/useCases/user/RefreshToken/RefreshTokenUseCase';
import { LoginUserBody } from '../../dtos/loginUserBody';

@Controller('refreshToken')
export class RefreshTokenController {
  constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}

  @Get()
  async login(@Headers('authorization') headers) {
    try {
      return await this.refreshTokenUseCase.execute(headers);
    } catch (err: any) {
      throw new HttpException(
        {
          status: err.status,
          error: err.message,
        },
        err.status,
      );
    }
  }
}
