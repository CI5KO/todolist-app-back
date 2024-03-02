import { TaskEntity } from './task.entity'

export interface TaskRepository {
  get(uuid: string): Promise<TaskEntity>
  getByUserId(userId: string): Promise<TaskEntity[]>
  create(task: TaskEntity): Promise<TaskEntity>
  update(task: TaskEntity): Promise<TaskEntity>
  delete(uuid: string): Promise<void>
}
