import { Module } from '@nestjs/common';
import { CreateUserUseCase } from '../../app/useCases/user/CreateUser/CreateUserUseCase';
import { DataBaseModule } from '../database/database.module';
import { CreateUserController } from './controllers/user/CreateUser.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [CreateUserController],
  providers: [CreateUserUseCase],
})
export class httpModule {}
