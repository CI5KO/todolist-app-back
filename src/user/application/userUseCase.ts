import { UserRepository } from '../domain/user.repository'
import { UserRegisterEntiry } from '../domain/user.entity'
import { UserValue } from '../domain/user.value'

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async registerUser(userIn: UserRegisterEntiry) {
    const userValue = new UserValue(userIn)
    return await this.userRepository.registerUser(userValue)
  }

  async getDetailUSer(uuid: string) {
    return await this.userRepository.findUserById(uuid)
  }
}
