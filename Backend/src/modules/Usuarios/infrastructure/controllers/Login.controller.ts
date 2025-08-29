import { Request, Response } from 'express'
import { LoginUserUseCase } from '../../application/use-case/LoginUser.use-case'
import { LoginUserPrisma } from '../prisma/LoginUserPrisma'
import { generateToken } from '@/shared/utils/generateToken'

const repo = new LoginUserPrisma()
const usecase = new LoginUserUseCase(repo)

export class LoginController {
  static async login(req: Request, res: Response) {
    const user = await usecase.login(req.body)

    if (!user || !user.getEmail().getValue() || !user.getId()) {
      return res.status(400).json({ error: 'Invalid user credentials' })
    }
    const token = generateToken({ email: user.getEmail().getValue(), id_user: user.getId() })

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    })
    return res.status(200).json(user)
  }
}
