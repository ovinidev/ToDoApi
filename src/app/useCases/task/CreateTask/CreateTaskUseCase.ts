import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../../../app/repositories/TasksRepository';

export interface CreateTaskProps {
  name: string;
  userId: string;
}

@Injectable()
export class CreateTaskUseCase {
  constructor(private taskRepository: TasksRepository) {}

  async execute(data: CreateTaskProps): Promise<CreateTaskProps> {
    await this.taskRepository.create(data);

    return data;
  }
}
