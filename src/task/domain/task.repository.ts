import { TaskEntity } from './task.entity'

export interface TaskRepository {
  get(id: string): Promise<TaskEntity>
  getByUserId(userId: string): Promise<TaskEntity[]>
  create(task: TaskEntity): Promise<TaskEntity>
  update(task: TaskEntity): Promise<TaskEntity>
  delete(id: string): Promise<void>
}
