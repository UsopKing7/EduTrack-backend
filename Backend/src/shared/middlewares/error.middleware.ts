import { Request, Response, NextFunction } from 'express'
import { errorFormat } from '../utils/errorformat'

export function errorMiddleware(error: Error, _req: Request, res: Response, _next: NextFunction) {
  return res.status(400).json({ error: errorFormat(error) })
}
