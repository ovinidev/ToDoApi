import { Task, TaskProps } from './task';

describe('Task', () => {
  it('should be able to create a task', () => {
    const taskToCreate = {
      id: '123456789',
      name: 'task test',
      createdAt: new Date(),
      status: 'pending',
      updatedAt: new Date(),
      userId: '123',
    } as TaskProps;

    const task = new Task(taskToCreate);

    expect(task).toBeTruthy();
  });
});
