import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config/env'

export const generateToken = (payload: { email: string, id_user: string }) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '7d' })
}
