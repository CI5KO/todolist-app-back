import { TaskRepository } from '../domain/task.repository'
import { TaskValue } from '../domain/task.value'

interface createTask extends Omit<TaskValue, 'uuid'> {}

export class TaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async get(id: string): Promise<TaskValue> {
    return await this.taskRepository.get(id)
  }

  async getByUserId(userId: string): Promise<TaskValue[]> {
    return await this.taskRepository.getByUserId(userId)
  }

  async create(task: createTask): Promise<TaskValue> {
    const taskValue = new TaskValue(task)
    return await this.taskRepository.create(taskValue)
  }

  async update(task: TaskValue): Promise<TaskValue> {
    return await this.taskRepository.update(task)
  }

  async delete(id: string): Promise<void> {
    await this.taskRepository.delete(id)
  }
}
