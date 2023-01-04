import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../../../app/repositories/TasksRepository';
import { UpdateTaskBody } from '../../../../infra/http/dtos/updateTaskBody';

@Injectable()
export class UpdateTaskUseCase {
  constructor(private taskRepository: TasksRepository) {}

  async execute(taskId: string, taskData: UpdateTaskBody) {
    await this.taskRepository.update(taskId, taskData);

    return taskData;
  }
}
