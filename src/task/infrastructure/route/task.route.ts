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
