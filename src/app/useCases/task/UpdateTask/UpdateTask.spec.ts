import { TaskRepositoryInMemory } from '../../../../../test/repositories/TaskRepositoryInMemory';
import { CreateTaskUseCase } from '../CreateTask/CreateTaskUseCase';
import { UpdateTaskUseCase } from './UpdateTaskUseCase';

describe('Update task', () => {
  const taskRepositoryInMemory = new TaskRepositoryInMemory();

  it('should be able to find user tasks', async () => {
    const createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
    const updateTaskUseCase = new UpdateTaskUseCase(taskRepositoryInMemory);

    const taskToBeCreate = {
      name: 'Task test',
      userId: '1234',
      id: '123',
    };

    await createTaskUseCase.execute(taskToBeCreate);

    const taskEdited = await updateTaskUseCase.execute('123', {
      name: 'Task test updated',
      status: 'done',
    });

    expect(taskToBeCreate).not.toEqual(taskEdited);
  });
});
