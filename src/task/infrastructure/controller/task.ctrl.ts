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

import { Request, Response } from 'express'
import { TaskUseCase } from '../../application/taskUseCase'
import { TaskEntity, TaskRegisterEntiry } from '../../domain/task.entity'

export class TaskController {
  constructor(private taskUseCase: TaskUseCase) {
    this.get = this.get.bind(this)
    this.getByUserId = this.getByUserId.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  async get(req: Request, res: Response) {
    try {
      const { id } = req.params
      const task = await this.taskUseCase.get(id)
      res.status(200).json(task)
    } catch (error) {
      res.status(500).send({ error })
    }
  }

  async getByUserId(req: Request, res: Response) {
    try {
      const { id } = req.params
      const tasks = await this.taskUseCase.getByUserId(id)
      res.status(200).json(tasks)
    } catch (error) {
      res.status(500).send({ error })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { task }: { task: TaskRegisterEntiry } = req.body
      const response = await this.taskUseCase.create(task)
      res.status(201).json(response)
    } catch (error) {
      res.status(500).send({ error })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { task }: { task: TaskEntity } = req.body
      const response = await this.taskUseCase.update({ ...task, uuid: id })
      res.status(201).json(response)
    } catch (error) {
      res.status(500).send({ error })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params
      await this.taskUseCase.delete(id)
      res.sendStatus(204)
    } catch (error) {
      res.status(500).send({ error })
    }
  }
}
