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
import { TaskUseCase } from '../../application/taskUseCase'
import { TaskController } from '../controller/task.ctrl'

import { Middleware } from '../../../user/infrastructure/security/middleware'
import { PgRepository } from '../repository/pg.repository'

const route = Router()
const middleware = new Middleware()

const taskRepo = new PgRepository()
const taskUseCase = new TaskUseCase(taskRepo)
const taskCtrl = new TaskController(taskUseCase)

route.get('/:id', middleware.auth, taskCtrl.get)
route.get('/user-id/:id', middleware.auth, taskCtrl.getByUserId)
route.post('/', middleware.auth, taskCtrl.create)
route.put('/:id', middleware.auth, taskCtrl.update)
route.delete('/:id', middleware.auth, taskCtrl.delete)

export default route
