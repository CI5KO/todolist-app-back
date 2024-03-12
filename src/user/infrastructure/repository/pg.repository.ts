import { UserRegisterEntiry } from '../../domain/user.entity'
import { UserRepository } from '../../domain/user.repository'

import UserModel from '../model/pg.schema'

export class PgRepository implements UserRepository {
  async get(uuid: string): Promise<any> {
    const user = await UserModel.findOne({ where: { uuid } })
    return user
  }

  async create(userIn: UserRegisterEntiry): Promise<any> {
    const user = await UserModel.create({
      ...userIn,
    })
    return user
  }

  async list(): Promise<any> {
    const user = await UserModel.findAll()
    return user
  }

  async login(email: string): Promise<any> {
    const user = await UserModel.findOne({ where: { email } })
    return user
  }
}
