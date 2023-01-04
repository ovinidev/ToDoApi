import { Injectable } from '@nestjs/common';
import { TasksRepository } from 'src/app/repositories/TasksRepository';

export interface CreateTaskProps {
  name: string;
  userId: string;
}

@Injectable()
export class CreateTaskUseCase {
  constructor(private taskRepository: TasksRepository) {}

  async execute(data: CreateTaskProps): Promise<void> {
    await this.taskRepository.create(data);
  }
}
