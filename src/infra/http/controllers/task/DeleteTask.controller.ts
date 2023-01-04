import { Controller, Delete, HttpException, Req } from '@nestjs/common';
import { Request } from 'express';

import { DeleteTaskUseCase } from 'src/app/useCases/task/DeleteTask/DeleteTaskUseCase';

@Controller('tasks')
export class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  @Delete('/:taskId')
  async Delete(@Req() req: Request) {
    try {
      const { taskId } = req.params;

      await this.deleteTaskUseCase.execute(taskId);

      return { message: 'Task deleted successfuly' };
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
