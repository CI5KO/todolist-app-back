import { v4 as uuid } from 'uuid'
import { UserEntity, UserRegisterEntiry } from './user.entity'

export class UserValue implements UserEntity {
  uuid: string
  name: string
  email: string
  password: string

  constructor({ name, email, password }: UserRegisterEntiry) {
    this.uuid = uuid()
    this.name = name
    this.email = email
    this.password = password
  }
}
