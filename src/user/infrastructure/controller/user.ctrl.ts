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
import { UserUseCase } from '../../application/userUseCase'
import { UserRegisterEntiry } from '../../domain/user.entity'

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.create = this.create.bind(this)
    this.get = this.get.bind(this)
    this.login = this.login.bind(this)
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params
      const user = await this.userUseCase.get(id)
      res.status(200).send({ user })
    } catch (error) {
      res.status(500).send({ error })
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { user }: { user: UserRegisterEntiry } = req.body
      const response = await this.userUseCase.create(user)
      res.status(201).send(response)
    } catch (error) {
      res.status(500).send({ error })
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password }: { email: string; password: string } = req.body
      const jwt = await this.userUseCase.login(email, password)
      res.status(200).send({ jwt })
    } catch (error) {
      res.status(500).send({ error })
    }
  }
}
