import { Request, Response } from 'express'
import { CrearAlumnoUseCase } from '../../application/use-case/crearAlumno.use-case'
import { CreateAlumnoPrisma } from '../prisma/CreateALumnoPrisma'
import { RequestError } from '@/core/errors/requestError'

const repo = new CreateAlumnoPrisma()
const usecase = new CrearAlumnoUseCase(repo)

export class AlumnoController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params
    const { carrera } = req.body
    if (!id_user) throw new RequestError(400, 'ID User is required')

    const alumno = await usecase.create({ id_user, carrera })
    return res.status(201).json(alumno)
  }

  static async findAll(_req: Request, res: Response): Promise<Response> {
    const alumnos = await repo.findAll()
    if (!alumnos) throw new RequestError(404, 'Alumnos not found')

    return res.status(200).json(alumnos)
  }

  static async deleteAlumno(req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params
    if (!id_user) throw new RequestError(400, 'ID User is required')

    const alumno = await usecase.deleteAlumno(id_user)

    return res.status(200).json(alumno)
  }

  static async updateAlumno(req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params
    const { carrera } = req.body

    if (!id_user) throw new RequestError(400, 'ID User is required')
    
    const alumno = await usecase.updateAlumno({ id_user, carrera })

    return res.status(200).json(alumno)
  }
}
