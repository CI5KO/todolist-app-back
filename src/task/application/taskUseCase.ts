import { TaskRepository } from '../domain/task.repository'
import { TaskRegisterEntiry } from '../domain/task.entity'
import { TaskValue } from '../domain/task.value'

export class TaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async get(id: string): Promise<TaskValue> {
    return await this.taskRepository.get(id)
  }

  async getByUserId(userId: string): Promise<TaskValue[]> {
    return await this.taskRepository.getByUserId(userId)
  }

  async create(task: TaskRegisterEntiry): Promise<TaskValue> {
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
