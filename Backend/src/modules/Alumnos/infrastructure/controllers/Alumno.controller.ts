import { Request, Response } from 'express'
import { CrearAlumnoUseCase } from '../../application/use-case/crearAlumno.use-case'
import { CreateAlumnoPrisma } from '../prisma/CreateALumnoPrisma'
import { RequestError } from '@/core/errors/requestError'

const repo = new CreateAlumnoPrisma()
const usecase = new CrearAlumnoUseCase(repo)

export class AlumnoController {
  static async create(req: Request, res: Response) {
    const { id_user } = req.params
    const { carrera } = req.body
    if (!id_user) throw new RequestError(400, 'ID User is required')

    const alumno = await usecase.create({ id_user, carrera })
    return res.status(201).json(alumno)
  }
}