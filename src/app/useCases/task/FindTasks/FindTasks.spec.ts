import { TaskRepositoryInMemory } from '../../../../../test/repositories/TaskRepositoryInMemory';
import { CreateTaskUseCase } from '../CreateTask/CreateTaskUseCase';
import { FindTaskUseCase } from './FindTasksUseCase';

describe('Find tasks', () => {
  const taskRepositoryInMemory = new TaskRepositoryInMemory();

  it('should be able to find user tasks', async () => {
    const createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
    const findTasksUseCase = new FindTaskUseCase(taskRepositoryInMemory);

    const taskToBeCreate = {
      name: 'Task test',
      userId: '1234',
      id: '123',
    };

    await createTaskUseCase.execute(taskToBeCreate);

    const tasks = await findTasksUseCase.execute('1234');

    expect(tasks).toHaveLength(1);
  });
});
