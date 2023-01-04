import { Controller, HttpException, Req, Patch, Body } from '@nestjs/common';
import { Request } from 'express';

import { UpdateTaskUseCase } from 'src/app/useCases/task/UpdateTask/UpdateTaskUseCase';
import { UpdateTaskBody } from '../../dtos/updateTaskBody';

@Controller('tasks')
export class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

  @Patch('/:taskId')
  async update(@Body() { name, status }: UpdateTaskBody, @Req() req: Request) {
    try {
      const { taskId } = req.params;

      const statusAvailable = ['done', 'pending'];

      if (!statusAvailable.includes(status)) {
        throw new HttpException(
          {
            message: 'Status to be done or pending',
            status: 400,
          },
          400,
        );
      }

      await this.updateTaskUseCase.execute(taskId, {
        name,
        status,
      });

      return { message: 'Task updated successfully.' };
    } catch (err: any) {
      throw new HttpException(
        {
          status: err.status,
          message: err.message,
        },
        err.status,
      );
    }
  }
}
