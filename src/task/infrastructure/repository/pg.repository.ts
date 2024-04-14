/**
 * Author: CI5KO
 * Creation Date: April 14, 2024
 * Last Modification: April 14, 2024
 *
 * Contact: hector_oliva16k@hotmail.com
 *
 * This code is owned by CI5KO.
 * You are welcome to contribute to the original repository.
 *
 * Any contributions to this repository are subject to the original terms stated herein.
 */

import { TaskEntity } from '../../domain/task.entity'
import { TaskRepository } from '../../domain/task.repository'

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
    const task = await TaskModel.create({ ...taskIn })
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
