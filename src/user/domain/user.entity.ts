export interface UserEntity {
  uuid: string
  name: string
  email: string
  password: string
}

export interface UserRegisterEntiry extends Omit<UserEntity, 'uuid'> {}
