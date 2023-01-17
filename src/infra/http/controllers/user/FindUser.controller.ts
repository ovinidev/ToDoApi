import { Controller, Get, HttpException, Req } from '@nestjs/common';
import { Request } from 'express';
import { FindUserUseCase } from 'src/app/useCases/user/FindUserData/FindUserDataUseCase';
import { UserViewModel } from '../../viewModels/UserViewModel';

@Controller('users')
export class FindUserController {
  constructor(private findUserUseCase: FindUserUseCase) {}

  @Get()
  async get(@Req() req: Request) {
    try {
      const { id } = req.user;

      const user = await this.findUserUseCase.execute(id);

      return UserViewModel.toHTTP(user);
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
