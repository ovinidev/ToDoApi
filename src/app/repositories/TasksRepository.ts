import { Task } from '../entities/task/task';

export abstract class TasksRepository {
  abstract create(task: Task): Promise<void>;
  abstract findAll(): Promise<Task[]>;
}
