import 'dotenv/config'
import express from 'express'
import cors from 'express'

import userRoute from './user/infrastructure/route/user.route'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/user', userRoute)

export default app
