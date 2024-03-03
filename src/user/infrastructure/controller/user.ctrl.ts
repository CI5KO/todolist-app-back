import { Request, Response } from 'express'
import { UserUseCase } from '../../application/userUseCase'
import { UserRegisterEntiry } from '../../domain/user.entity'

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this)
    this.getCtrl = this.getCtrl.bind(this)
  }

  public async getCtrl({ query }: Request, res: Response) {
    const { uuid = '' } = query
    const user = await this.userUseCase.getDetailUSer(`${uuid}`)
    res.status(200).send({ user })
  }

  public async insertCtrl(req: Request, res: Response) {
    const { user }: { user: UserRegisterEntiry } = req.body
    const response = await this.userUseCase.registerUser(user)
    res.status(201).send(response)
  }
}
