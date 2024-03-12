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
