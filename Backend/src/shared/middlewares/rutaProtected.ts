import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { SECRET_KEY } from '../config/env'
import { RequestUser } from '../config/reqUser'

export const rutaProtected = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token
  if (!token) throw new Error('No tienes autorizacion')

  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    req.user = decoded as RequestUser
    next()
  } catch (error) {
    res.status(401).json({ error: 'No tienes autorizacion' })
  }
}
