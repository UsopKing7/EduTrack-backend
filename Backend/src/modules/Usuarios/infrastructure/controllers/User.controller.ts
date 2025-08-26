import { Request, Response } from 'express'
import { CrearUserUseCase } from '../../application/use-case/CrearUser.use-case'
import { CrearUserPrisma } from '../prisma/createUserPrisma'

const repo = new CrearUserPrisma()
const usecase = new CrearUserUseCase(repo)

export class UserController {
  static async create(req: Request, res: Response) {
    const user = await usecase.create(req.body)
    return res.status(201).json(user)
  }
}
