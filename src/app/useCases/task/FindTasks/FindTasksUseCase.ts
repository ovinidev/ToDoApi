import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../../../app/repositories/TasksRepository';

@Injectable()
export class FindTaskUseCase {
  constructor(private taskRepository: TasksRepository) {}

  async execute(userId: string) {
    return await this.taskRepository.findAll(userId);
  }
}
