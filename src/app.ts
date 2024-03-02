import 'dotenv/config'
import express from 'express'
import cors from 'express'

import userRoute from './user/infrastructure/route/user.route'
import taskRoute from './task/infrastructure/route/task.route'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/user', userRoute)
app.use('/task', taskRoute)

export default app
