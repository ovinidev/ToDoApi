import { TaskRepositoryInMemory } from '../../../../../test/repositories/TaskRepositoryInMemory';
import { CreateTaskUseCase } from './CreateTaskUseCase';

describe('Create task', () => {
  const taskRepositoryInMemory = new TaskRepositoryInMemory();

  it('should be able to create a new task', async () => {
    const createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);

    const taskToBeCreate = {
      name: 'Task',
      userId: '123',
    };

    const taskCreated = await createTaskUseCase.execute(taskToBeCreate);
    await createTaskUseCase.execute(taskToBeCreate);

    expect(taskCreated).toBeTruthy();
    expect(taskRepositoryInMemory.tasks).toHaveLength(2);
  });
});
