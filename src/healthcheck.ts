import { Router } from 'express'
import { isUserDBConnected } from './user/infrastructure/dbConection'
import { isTaskDBConnected } from './task/infrastructure/dbConection'

const route = Router()

route.get('/', async (_req, res) => {
  const isUserDatabaseConnected = await isUserDBConnected()
  const isTaskDatabaseConnected = await isTaskDBConnected()

  const uptime = process.uptime()

  const healthCheckResponse = {
    status: isUserDatabaseConnected && isTaskDatabaseConnected ? 'UP' : 'DOWN',
    databases: {
      userDatabase: {
        connected: isUserDatabaseConnected
      },
      taskDatabase: {
        connected: isTaskDatabaseConnected
      }
    },
    uptime: `${uptime} seconds`
  }

  res.json(healthCheckResponse)
})

export default route
