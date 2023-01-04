import { Task } from 'src/app/entities/task/task';

export interface TaskViewModelProps {
  task: {
    name: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    id: string;
  };
}

export class TaskViewModel {
  static toHTTP(task: Task): TaskViewModelProps {
    return {
      task: {
        name: task.name,
        status: task.status,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt,
        id: task.id,
      },
    };
  }
}
