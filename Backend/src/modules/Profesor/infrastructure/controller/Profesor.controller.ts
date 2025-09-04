import { Request, Response } from 'express'
import { ProfesorUseCase } from '../../application/use-case/Profesor.use-case'
import { ProfesorPrisma } from '../prisma/ProfesorPrisma'
import { RequestError } from '@/core/errors/requestError'

const repo = new ProfesorPrisma()
const usecase = new ProfesorUseCase(repo)

export class ProfesorController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params
    if (!id_user) throw new RequestError(400, 'ID User is required')

    const { especialidad } = req.body

    const profesor = await usecase.create({ id_user, especialidad })
    return res.status(201).json(profesor)
  }
}
