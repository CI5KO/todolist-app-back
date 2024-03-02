import { Router } from 'express'
import { TaskUseCase } from '../../application/taskUseCase'
import { TaskController } from '../controller/task.ctrl'

import { PgRepository } from '../repository/pg.repository'

const route = Router()
const taskRepo = new PgRepository()
const taskUseCase = new TaskUseCase(taskRepo)
const taskCtrl = new TaskController(taskUseCase)

route.get('/:id', taskCtrl.get)
route.get('/user-id/:id', taskCtrl.getByUserId)
route.post('/', taskCtrl.create)
route.put('/:id', taskCtrl.update)
route.delete('/:id', taskCtrl.delete)

export default route
