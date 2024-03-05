import { Request, Response, NextFunction } from 'express'
import { UserRegisterEntiry } from '../../domain/user.entity'

export function validateUserRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user }: { user: UserRegisterEntiry } = req.body
  const requestBody = ['name', 'email', 'password']

  if (user === undefined) {
    res
      .status(400)
      .send({ error: 'User is not in the request body, try again' })
    return
  }
  for (const key of requestBody) {
    if (user[key as keyof UserRegisterEntiry] === undefined) {
      res.status(400).send({ error: `${key} is required` })
      return
    }
  }

  next()
}
