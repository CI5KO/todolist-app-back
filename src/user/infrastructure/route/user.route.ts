import { Router } from 'express'
import { UserUseCase } from '../../application/userUseCase'
import { UserController } from '../controller/user.ctrl'

// import { PgRepository } from '../repository/pg.repository'
// import { MockRepository } from "../repository/mock.repository";
import { MongoRepository } from '../repository/mongo.repository'

const route = Router()
const userRepo = new MongoRepository()
const userUseCase = new UserUseCase(userRepo)
const userCtrl = new UserController(userUseCase)

route.get(`/`, userCtrl.getCtrl)
route.post(`/`, userCtrl.insertCtrl)

export default route
