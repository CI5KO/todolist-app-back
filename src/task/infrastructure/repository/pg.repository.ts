import { TaskEntity } from '../../domain/task.entity'
import { TaskRepository } from '../../domain/task.repository'
import { TaskValue } from '../../domain/task.value'

import TaskModel from '../model/pg.schema'

export class PgRepository implements TaskRepository {
  async get(uuid: string): Promise<any> {
    const task = await TaskModel.findOne({ where: { uuid } })
    return task
  }

  async getByUserId(userId: string): Promise<any> {
    const tasks = await TaskModel.findAll({ where: { userId } })
    return tasks
  }

  async create(taskIn: TaskEntity): Promise<any> {
    const taskInsert = new TaskValue(taskIn)
    const task = await TaskModel.create({ ...taskInsert })
    return task
  }

  async update(taskIn: TaskEntity): Promise<any> {
    const task = await TaskModel.update(taskIn, {
      where: { uuid: taskIn.uuid },
    })
    return task
  }

  async delete(uuid: string): Promise<any> {
    const task = await TaskModel.destroy({ where: { uuid } })
    return task
  }
}
