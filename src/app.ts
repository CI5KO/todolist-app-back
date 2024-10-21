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

import 'dotenv/config'
import express, { json } from 'express'
import cors from 'express'

import userRoute from './user/infrastructure/route/user.route'
import taskRoute from './task/infrastructure/route/task.route'
import HealtcheckRoute from './healthcheck'

const app = express()

app.use(cors())
app.use(json())
app.options('*', cors())

app.use('/user', userRoute)
app.use('/task', taskRoute)
app.use('/healtCheck', HealtcheckRoute)

export default app
