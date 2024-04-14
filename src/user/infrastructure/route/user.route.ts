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

import { Router } from 'express'
import { UserUseCase } from '../../application/userUseCase'
import { UserController } from '../controller/user.ctrl'

import { validateUserRequest } from '../security/middleware'
import { PgRepository } from '../repository/pg.repository'

const route = Router()
const userRepo = new PgRepository()
const userUseCase = new UserUseCase(userRepo)
const userCtrl = new UserController(userUseCase)

route.get('/:id', userCtrl.get)
route.post('/', validateUserRequest, userCtrl.create)
route.post('/login', userCtrl.login)

export default route
