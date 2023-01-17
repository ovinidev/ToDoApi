import { Module } from '@nestjs/common';
import { CreateTaskUseCase } from 'src/app/useCases/task/CreateTask/CreateTaskUseCase';
import { DeleteTaskUseCase } from 'src/app/useCases/task/DeleteTask/DeleteTaskUseCase';
import { FindTaskUseCase } from 'src/app/useCases/task/FindTasks/FindTasksUseCase';
import { UpdateTaskUseCase } from 'src/app/useCases/task/UpdateTask/UpdateTaskUseCase';
import { FindUserUseCase } from 'src/app/useCases/user/FindUserData/FindUserDataUseCase';
import { LoginUseCase } from 'src/app/useCases/user/Login/LoginUseCase';
import { RefreshTokenUseCase } from 'src/app/useCases/user/RefreshToken/RefreshTokenUseCase';
import { CreateUserUseCase } from '../../app/useCases/user/CreateUser/CreateUserUseCase';
import { DataBaseModule } from '../database/database.module';
import { CreateTaskController } from './controllers/task/CreateTask.controller';
import { DeleteTaskController } from './controllers/task/DeleteTask.controller';
import { FindTasksController } from './controllers/task/FindTasks.controller';
import { FindUserController } from './controllers/user/FindUser.controller';
import { UpdateTaskController } from './controllers/task/UpdateTask.controller';
import { CreateUserController } from './controllers/user/CreateUser.controller';
import { LoginController } from './controllers/user/Login.controller';
import { RefreshTokenController } from './controllers/user/RefreshToken.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [
    CreateUserController,
    LoginController,
    RefreshTokenController,
    CreateTaskController,
    FindTasksController,
    DeleteTaskController,
    UpdateTaskController,
    FindUserController,
  ],
  providers: [
    CreateUserUseCase,
    LoginUseCase,
    RefreshTokenUseCase,
    CreateTaskUseCase,
    FindTaskUseCase,
    DeleteTaskUseCase,
    UpdateTaskUseCase,
    FindUserUseCase,
  ],
})
export class httpModule {}
