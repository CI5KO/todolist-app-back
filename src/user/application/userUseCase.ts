import { UserRepository } from '../domain/user.repository'
import { UserRegisterEntiry } from '../domain/user.entity'
import { UserValue } from '../domain/user.value'

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async get(uuid: string) {
    return await this.userRepository.get(uuid)
  }

  async create(userIn: UserRegisterEntiry) {
    const userValue = new UserValue(userIn)
    return await this.userRepository.create(userValue)
  }
}
