import { Body, Controller, HttpException, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateTaskUseCase } from 'src/app/useCases/task/CreateTask/CreateTaskUseCase';
import { CreateTaskBody } from '../../dtos/createTaskBody';

@Controller('tasks')
export class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  @Post()
  async create(@Body() body: CreateTaskBody, @Req() req: Request) {
    try {
      const { id } = req.user;

      await this.createTaskUseCase.execute({
        name: body.name,
        userId: id,
      });

      return { message: 'Task created successfully.' };
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
