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

import { UserEntity } from './user.entity'
import { UserRegisterEntiry } from './user.entity'

export interface UserRepository {
  get(uuid: string): Promise<UserEntity | null>
  create(user: UserRegisterEntiry): Promise<UserEntity | null>
  list(): Promise<UserEntity[] | null>
  login(email: string): Promise<UserEntity | null>
}
