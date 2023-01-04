import { Task } from 'src/app/entities/task/task';
import { TasksRepository } from 'src/app/repositories/TasksRepository';

export class TaskRepositoryInMemory implements TasksRepository {
  public tasks: Task[] = [];

  async create(task: Task): Promise<void> {
    this.tasks.push(task);
  }

  async delete(taskId: string): Promise<void> {
    const filteredTasks = this.tasks.filter((task) => task.id !== taskId);

    this.tasks = filteredTasks;
  }

  async findAll(userId: string): Promise<Task[]> {
    return this.tasks.filter((task) => task.userId === userId);
  }

  async findById(taskId: string): Promise<Task> {
    return this.tasks.find((task) => task.id === taskId);
  }

  async update(taskId: string, task: Task): Promise<void> {
    const tasks = this.tasks.filter((task) => task.id !== taskId);

    this.tasks = tasks;

    this.tasks.push(task);
  }
}
