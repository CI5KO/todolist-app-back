import { UserRepository } from '../domain/user.repository'
import { UserValue } from '../domain/user.value'

interface registerProps {
  name: string
  email: string
  password: string
}

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public registerUser = async ({ name, email, password }: registerProps) => {
    const userValue = new UserValue({ name, email, password })
    return await this.userRepository.registerUser(userValue)
  }

  public getDetailUSer = async (uuid: string) => {
    return await this.userRepository.findUserById(uuid)
  }
}
