import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { LoginUseCase } from 'src/app/useCases/user/Login/LoginUseCase';
import { LoginUserBody } from '../../dtos/loginUserBody';

@Controller('login')
export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  @Post()
  async login(@Body() body: LoginUserBody) {
    try {
      return await this.loginUseCase.execute(body);
    } catch (err: any) {
      throw new HttpException(
        {
          status: err.status,
          error: err.message,
        },
        400,
      );
    }
  }
}
