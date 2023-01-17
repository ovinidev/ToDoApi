import { Injectable } from '@nestjs/common';
import { Task } from 'src/app/entities/task/task';
import { TasksRepository } from 'src/app/repositories/TasksRepository';
import { PrismaTaskMapper } from '../mappers/PrismaTaskMapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaTaskRepository implements TasksRepository {
  constructor(private prismaService: PrismaService) {}

  async create(task: Task): Promise<void> {
    const raw = PrismaTaskMapper.toPrisma(task);

    await this.prismaService.task.create({
      data: raw,
    });
  }

  async findAll(userId: string): Promise<Task[] | null> {
    const tasks = await this.prismaService.task.findMany({
      where: {
        userId,
      },
    });

    if (!tasks) return null;

    return tasks.map((task) => {
      return PrismaTaskMapper.toDomain(task);
    });
  }

  async findById(taskId: string): Promise<Task | null> {
    const task = await this.prismaService.task.findUnique({
      where: {
        id: taskId,
      },
    });

    if (!task) return null;

    return PrismaTaskMapper.toDomain(task);
  }

  async delete(taskId: string): Promise<void> {
    await this.prismaService.task.delete({
      where: {
        id: taskId,
      },
    });
  }

  async update(taskId: string, task: Task): Promise<void> {
    const raw = PrismaTaskMapper.toPrisma(task);

    await this.prismaService.task.update({
      where: {
        id: taskId,
      },
      data: raw,
    });
  }
}
