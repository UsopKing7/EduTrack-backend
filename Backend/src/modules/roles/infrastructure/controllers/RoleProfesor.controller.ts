import { Request, Response } from 'express'
import { RoleProfesorUseCase } from '../../application/use-case/RoleProfesor.use-case'
import { RoleProfesorPrisma } from '../prisma/RoleProfesorPrisma'

const repo = new RoleProfesorPrisma()
const usecase = new RoleProfesorUseCase(repo)

export class RoleProfesorController {
  static async create (req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params
    const role = await usecase.create({ id_user })

    return res.status(201).json(role)
  }
}
