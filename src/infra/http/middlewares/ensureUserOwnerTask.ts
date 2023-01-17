import { NextFunction, Request, Response } from 'express';
import { prismaService } from 'src/app/services/prismaService';
import { PrismaTaskRepository } from 'src/infra/database/prisma/repositories/PrismaTaskRepository';

export async function ensureUserOwnerTask(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { taskId } = req.params;
    const { id } = req.user;

    const taskRepository = new PrismaTaskRepository(prismaService);

    const task = await taskRepository.findById(taskId);

    if (!task) throw new Error('Task not found.');

    if (task.userId !== id) throw new Error('Your not owner of a task');

    next();
  } catch (err: any) {
    return res.status(401).json({ message: err.message });
  }
}
