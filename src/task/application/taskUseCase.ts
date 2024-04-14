import { TaskRepository } from '../domain/task.repository'
import { TaskEntity, TaskRegisterEntiry } from '../domain/task.entity'
import { TaskValue } from '../domain/task.value'
import { decrypt, encrypt } from '../domain/encryption'

export class TaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async get(id: string): Promise<TaskValue> {
    return await this.taskRepository.get(id)
  }

  async getByUserId(userId: string): Promise<TaskValue[]> {
    const tasks = await this.taskRepository.getByUserId(userId)
    return tasks.map((task: any) => ({
      ...task.get({ plain: true }),
      title: decrypt(task.title),
      description: decrypt(task.description),
    }))
  }

  async create(task: TaskRegisterEntiry): Promise<TaskValue> {
    task.title = encrypt(task.title)
    task.description = encrypt(task.description)
    const taskValue = new TaskValue(task)
    await this.taskRepository.create(taskValue)

    taskValue.title = decrypt(task.title)
    taskValue.description = decrypt(task.description)

    return taskValue
  }

  async update(task: TaskEntity): Promise<TaskEntity> {
    task.title = encrypt(task.title)
    task.description = encrypt(task.description)
    return await this.taskRepository.update(task)
  }

  async delete(id: string): Promise<void> {
    await this.taskRepository.delete(id)
  }
}
