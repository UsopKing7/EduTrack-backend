import { Request, Response } from 'express'
import { LoginUserUseCase } from '../../application/use-case/LoginUser.use-case'
import { LoginUserPrisma } from '../prisma/LoginUserPrisma'

const repo = new LoginUserPrisma()
const usecase = new LoginUserUseCase(repo)

export class LoginController {
  static async login(req: Request, res: Response) {
    const user = await usecase.login(req.body)
    return res.status(200).json(user)
  }
}
