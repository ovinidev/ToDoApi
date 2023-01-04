import { Module } from '@nestjs/common';
import { TasksRepository } from 'src/app/repositories/TasksRepository';
import { UserRepository } from '../../app/repositories/UserRepository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaTaskRepository } from './prisma/repositories/PrismaTaskRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: TasksRepository,
      useClass: PrismaTaskRepository,
    },
  ],
  exports: [UserRepository, TasksRepository],
})
export class DataBaseModule {}
