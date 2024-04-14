/**
 * Author: CI5KO
 * Creation Date: April 14, 2024
 * Last Modification: April 14, 2024
 *
 * Contact: hector_oliva16k@hotmail.com
 *
 * This code is owned by CI5KO.
 * You are welcome to contribute to the original repository.
 *
 * Any contributions to this repository are subject to the original terms stated herein.
 */

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
