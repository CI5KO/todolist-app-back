import { Router } from 'express'
import { UserUseCase } from '../../application/userUseCase'
import { UserController } from '../controller/user.ctrl'

import { PgRepository } from '../repository/pg.repository'

const route = Router()
const userRepo = new PgRepository()
const userUseCase = new UserUseCase(userRepo)
const userCtrl = new UserController(userUseCase)

route.get('/', userCtrl.getCtrl)
route.post('/', userCtrl.insertCtrl)

export default route
