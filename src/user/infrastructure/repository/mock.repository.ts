import { UserEntity } from '../../domain/user.entity'
import { UserRepository } from '../../domain/user.repository'

const MOCK_USER: UserEntity = {
  uuid: '000-000',
  name: 'Dummy',
  email: 'XXXXXXXXXXXXXXX',
  password: 'Hi',
}

export class MockRepository implements UserRepository {
  async findUserById(uuid: string): Promise<UserEntity> {
    const user = MOCK_USER
    console.log(uuid)
    return user
  }
  async registerUser(userIn: UserEntity): Promise<UserEntity> {
    const user = MOCK_USER
    console.log(userIn)
    return user
  }
  async listUser(): Promise<UserEntity[]> {
    const users = [MOCK_USER, MOCK_USER, MOCK_USER]
    return users
  }
}
