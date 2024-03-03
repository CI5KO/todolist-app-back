import { UserEntity } from '../../domain/user.entity'
import { UserRepository } from '../../domain/user.repository'
import UserModel from '../model/mongo.schema'

export class MongoRepository implements UserRepository {
  async get(uuid: string): Promise<any> {
    const user = await UserModel.findOne({ uuid })
    return user
  }
  async create(userIn: UserEntity): Promise<any> {
    const user = await UserModel.create(userIn)
    return user
  }
  async list(): Promise<any> {
    const user = await UserModel.find()
    return user
  }
}
