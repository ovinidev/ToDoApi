import { CreateTaskBody } from 'src/infra/http/dtos/createTaskBody';
import { UpdateTaskBody } from 'src/infra/http/dtos/updateTaskBody';
import { Task } from '../entities/task/task';

export abstract class TasksRepository {
  abstract create(task: CreateTaskBody): Promise<void>;
  abstract findAll(userId: string): Promise<Task[] | null>;
  abstract findById(taskId: string): Promise<Task | null>;
  abstract update(taskId: string, task: UpdateTaskBody): Promise<void>;
  abstract delete(taskId: string): Promise<void>;
}
