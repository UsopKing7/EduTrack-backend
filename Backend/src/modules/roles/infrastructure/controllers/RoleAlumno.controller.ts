import { Request, Response } from 'express'
import { RoleAlumnoUseCase } from '../../application/use-case/RoleAlumno.use-case'
import { RoleAlumnoPrisma } from '../prisma/RoleAlumnoPrisma'
import { RequestError } from '@/core/errors/requestError'

const repoAlumno = new RoleAlumnoPrisma()
const usecaseAlumno = new RoleAlumnoUseCase(repoAlumno)

export class RoleAlumnoController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params
    if (!id_user) throw new RequestError(400, 'ID User is required')

    const role = await usecaseAlumno.create({ id_user })

    return res.status(201).json(role)
  }
}
