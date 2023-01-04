import { Module } from '@nestjs/common';
import { CreateTaskUseCase } from 'src/app/useCases/task/CreateTask/CreateTaskUseCase';
import { DeleteTaskUseCase } from 'src/app/useCases/task/DeleteTask/DeleteTaskUseCase';
import { FindTaskUseCase } from 'src/app/useCases/task/FindTasks/FindTasksUseCase';
import { UpdateTaskUseCase } from 'src/app/useCases/task/UpdateTask/UpdateTaskUseCase';
import { LoginUseCase } from 'src/app/useCases/user/Login/LoginUseCase';
import { CreateUserUseCase } from '../../app/useCases/user/CreateUser/CreateUserUseCase';
import { DataBaseModule } from '../database/database.module';
import { CreateTaskController } from './controllers/task/CreateTask.controller';
import { DeleteTaskController } from './controllers/task/DeleteTask.controller';
import { FindTasksController } from './controllers/task/FindTasks.controller';
import { UpdateTaskController } from './controllers/task/UpdateTask.controller';
import { CreateUserController } from './controllers/user/CreateUser.controller';
import { LoginController } from './controllers/user/Login.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [
    CreateUserController,
    LoginController,
    CreateTaskController,
    FindTasksController,
    DeleteTaskController,
    UpdateTaskController,
  ],
  providers: [
    CreateUserUseCase,
    LoginUseCase,
    CreateTaskUseCase,
    FindTaskUseCase,
    DeleteTaskUseCase,
    UpdateTaskUseCase,
  ],
})
export class httpModule {}
