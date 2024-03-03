import { UserRegisterEntiry } from '../../domain/user.entity'
import { UserRepository } from '../../domain/user.repository'

import UserModel from '../model/pg.schema'

export class PgRepository implements UserRepository {
  async findUserById(uuid: string): Promise<any> {
    const user = await UserModel.findOne({ where: { uuid } })
    return user
  }
  async registerUser(userIn: UserRegisterEntiry): Promise<any> {
    const user = await UserModel.create({
      ...userIn,
    })
    return user
  }
  async listUser(): Promise<any> {
    const user = await UserModel.findAll()
    return user
  }
}
