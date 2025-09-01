import { Request, Response } from 'express'
import { RoleAdminUseCase } from '../../application/use-case/RoleAdmin.use-case'
import { RoleAdminPrisma } from '../prisma/RoleAdminPrisma'
import { RequestError } from '@/core/errors/requestError'

const repo = new RoleAdminPrisma()
const usecase = new RoleAdminUseCase(repo)

export class RoleAdminController {
  static async create (req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params
    if (!id_user) throw new RequestError(400, 'ID User is required')
    const role = await usecase.create({ id_user })

    return res.status(201).json(role)
  }
}
