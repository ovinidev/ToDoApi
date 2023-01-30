import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../../../app/repositories/TasksRepository';

export interface CreateTaskProps {
  name: string;
  userId: string;
}

@Injectable()
export class CreateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(data: CreateTaskProps): Promise<CreateTaskProps> {
    await this.tasksRepository.create(data);

    return data;
  }
}
