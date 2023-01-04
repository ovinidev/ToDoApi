import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../../../app/repositories/TasksRepository';

@Injectable()
export class DeleteTaskUseCase {
  constructor(private taskRepository: TasksRepository) {}

  async execute(taskId: string) {
    await this.taskRepository.delete(taskId);
  }
}
