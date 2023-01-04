import { Task as RawTask } from '@prisma/client';
import { Task } from 'src/app/entities/task/task';

export class PrismaTaskMapper {
  static toPrisma(task: Task) {
    return {
      name: task.name,
      status: task.status,
      userId: task.userId,
      updatedAt: new Date(),
    };
  }

  static toDomain(task: RawTask): Task {
    return new Task({
      name: task.name,
      status: task.status,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
      id: task.id,
      userId: task.userId,
    });
  }
}
