import { UserEntity } from './user.entity'
import { UserRegisterEntiry } from './user.entity'

export interface UserRepository {
  get(uuid: string): Promise<UserEntity | null>
  create(user: UserRegisterEntiry): Promise<UserEntity | null>
  list(): Promise<UserEntity[] | null>
  login(email: string): Promise<UserEntity | null>
}
