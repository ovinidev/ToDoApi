import { Controller, Get, Headers, HttpException } from '@nestjs/common';
import { RefreshTokenUseCase } from 'src/app/useCases/user/RefreshToken/RefreshTokenUseCase';

@Controller('refreshToken')
export class RefreshTokenController {
  constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}

  @Get()
  async login(@Headers('authorization') headers: string) {
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
