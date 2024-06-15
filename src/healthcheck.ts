import { Router } from 'express'

const route = Router()

route.get('/', (_req, res) => {
  res.send('Hello World')
})

export default route
