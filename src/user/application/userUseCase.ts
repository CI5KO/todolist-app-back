import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { UserRepository } from '../domain/user.repository'
import { UserRegisterEntiry } from '../domain/user.entity'
import { UserValue } from '../domain/user.value'

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async get(uuid: string) {
    return await this.userRepository.get(uuid)
  }

  async create(userIn: UserRegisterEntiry) {
    const hashedPassword = await bcrypt.hash(userIn.password, 10)
    const userValue = new UserValue({ ...userIn, password: hashedPassword })
    return await this.userRepository.create(userValue)
  }

  async login(email: string, password: string): Promise<string | null> {
    const user = await this.userRepository.login(email)
    if (!user) throw new Error('User not found')

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) throw new Error('Invalid password')

    const token: string = jwt.sign(
      { uuid: user.uuid, name: user.name, email: user.email },
      process.env.SECRET_KEY as string,
      { expiresIn: '24h' }
    )

    return token
  }
}
