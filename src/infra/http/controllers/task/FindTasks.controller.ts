import { Controller, Get, HttpException, Req } from '@nestjs/common';
import { Request } from 'express';
import { FindTaskUseCase } from 'src/app/useCases/task/FindTasks/FindTasksUseCase';
import {
  TaskViewModel,
  TaskViewModelProps,
} from '../../viewModels/TaskViewModel';

@Controller('tasks')
export class FindTasksController {
  constructor(private findTasksUseCase: FindTaskUseCase) {}

  @Get()
  async get(@Req() req: Request): Promise<TaskViewModelProps[]> {
    try {
      const { id } = req.user;

      const tasks = await this.findTasksUseCase.execute(id);

      return tasks.map((task) => {
        return TaskViewModel.toHTTP(task);
      });
    } catch (err: any) {
      throw new HttpException(
        {
          status: err.status,
          error: err.message,
        },
        err.status,
      );
    }
  }
}
