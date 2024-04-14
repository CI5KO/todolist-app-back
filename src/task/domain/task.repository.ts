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

import { TaskEntity } from './task.entity'

export interface TaskRepository {
  get(uuid: string): Promise<TaskEntity>
  getByUserId(userId: string): Promise<TaskEntity[]>
  create(task: TaskEntity): Promise<TaskEntity>
  update(task: TaskEntity): Promise<TaskEntity>
  delete(uuid: string): Promise<void>
}
