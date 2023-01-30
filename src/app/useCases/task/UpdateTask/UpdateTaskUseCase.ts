import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../../../app/repositories/TasksRepository';
import { UpdateTaskBody } from '../../../../infra/http/dtos/updateTaskBody';

@Injectable()
export class UpdateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(taskId: string, taskData: UpdateTaskBody) {
    await this.tasksRepository.update(taskId, taskData);

    return taskData;
  }
}
