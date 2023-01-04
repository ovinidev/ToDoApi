import { Module } from '@nestjs/common';
import { LoginUseCase } from 'src/app/useCases/user/Login/LoginUseCase';
import { CreateUserUseCase } from '../../app/useCases/user/CreateUser/CreateUserUseCase';
import { DataBaseModule } from '../database/database.module';
import { CreateUserController } from './controllers/user/CreateUser.controller';
import { LoginController } from './controllers/user/Login.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [CreateUserController, LoginController],
  providers: [CreateUserUseCase, LoginUseCase],
})
export class httpModule {}
