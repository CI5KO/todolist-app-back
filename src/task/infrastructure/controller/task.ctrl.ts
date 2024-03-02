import { Request, Response } from 'express'
import { TaskUseCase } from '../../application/taskUseCase'
import { TaskValue } from '../../domain/task.value'

export class TaskController {
  constructor(private taskUseCase: TaskUseCase) {
    this.get = this.get.bind(this)
    this.getByUserId = this.getByUserId.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  async get(req: Request, res: Response) {
    const { id } = req.params
    const task = await this.taskUseCase.get(id)
    res.status(200).json(task)
  }

  async getByUserId(req: Request, res: Response) {
    const { id } = req.params
    const task = await this.taskUseCase.getByUserId(id)
    res.status(200).json(task)
  }

  async create(req: Request, res: Response) {
    const { task }: { task: TaskValue } = req.body
    const response = await this.taskUseCase.create(task)
    res.status(201).json(response)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { task }: { task: TaskValue } = req.body
    const response = await this.taskUseCase.update({ ...task, uuid: id })
    res.status(201).json(response)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    await this.taskUseCase.delete(id)
    res.sendStatus(204)
  }
}
