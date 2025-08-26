import { SAL } from '@/shared/config/env'
import bcrypt from 'bcrypt'

export class Password {
  private readonly password: string

  constructor(password: string) {
    if (!password) throw new Error('Password is required')
    if (typeof password !== 'string') throw new Error('Password must be a string')
    if (password.length < 8) throw new Error('Password must be at least 8 characters')

    this.password = password
  }

  static async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(SAL)
    const hash = await bcrypt.hash(password, salt)

    return hash
  }

  static async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash)
  }

  getValue() {
    return this.password
  }
}
