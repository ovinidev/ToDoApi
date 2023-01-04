import { TaskRepositoryInMemory } from '../../../../../test/repositories/TaskRepositoryInMemory';
import { CreateTaskUseCase } from '../CreateTask/CreateTaskUseCase';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';

describe('Delete task', () => {
  const taskRepositoryInMemory = new TaskRepositoryInMemory();

  it('should be able to delete a task', async () => {
    const createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
    const deleteTaskUseCase = new DeleteTaskUseCase(taskRepositoryInMemory);

    const taskToBeCreate = {
      name: 'Task test',
      userId: '1234',
      id: '123',
    };

    await createTaskUseCase.execute(taskToBeCreate);

    await deleteTaskUseCase.execute('123');

    expect(taskRepositoryInMemory.tasks).toHaveLength(0);
  });
});
