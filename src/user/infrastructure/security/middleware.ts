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
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken'
import { type Request, type Response, type NextFunction } from 'express'
import { UserRegisterEntiry } from '../../domain/user.entity'

export class Middleware {
  private readonly SECRET: string = process.env.TOKEN_SECRET as string
  public create(req: Request, res: Response, next: NextFunction) {
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

  public auth(request: Request, response: Response, next: NextFunction) {
    try {
      const Authorization: string | undefined = request.header('Authorization')
      const token: string | undefined = Authorization?.replace('Bearer ', '')
      let decoded: any = undefined

      if (!token)
        return response
          .status(401)
          .json({ error_code: 11, msg: 'Access denied, no token given' })

      jwt.verify(
        token,
        this.SECRET,
        {
          maxAge: '7d'
        },
        (error, decode) => {
          if (error instanceof TokenExpiredError)
            return response
              .status(408)
              .json({ error_code: 12, msg: 'Invalid Token: Token expired' })

          if (
            error instanceof JsonWebTokenError &&
            error.message === 'invalid signature'
          )
            return response
              .status(400)
              .json({ error_code: 13, msg: 'Invalid Token: Invalid signature' })

          if (
            error instanceof JsonWebTokenError &&
            error.message === 'invalid token'
          )
            return response
              .status(400)
              .json({ error_code: 14, msg: 'Invalid Token: Wrong structure' })

          console.log(decode)
          decoded = decode
          return next()
        }
      )

      return decoded
    } catch (error) {
      console.error(error)
      return response.status(401).json({ error_code: 10, msg: 'Invalid Token' })
    }
  }
}
