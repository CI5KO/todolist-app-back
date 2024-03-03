import { Request, Response } from 'express'
import { UserUseCase } from '../../application/userUseCase'
import { UserRegisterEntiry } from '../../domain/user.entity'

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.create = this.create.bind(this)
    this.get = this.get.bind(this)
  }

  public async get(req: Request, res: Response) {
    const { id } = req.params
    const user = await this.userUseCase.get(id)
    res.status(200).send({ user })
  }

  public async create(req: Request, res: Response) {
    const { user }: { user: UserRegisterEntiry } = req.body
    const response = await this.userUseCase.create(user)
    res.status(201).send(response)
  }
}
