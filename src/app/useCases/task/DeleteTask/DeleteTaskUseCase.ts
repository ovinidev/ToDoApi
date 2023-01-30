import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../../../app/repositories/TasksRepository';

@Injectable()
export class DeleteTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(taskId: string) {
    await this.tasksRepository.delete(taskId);
  }
}
