import { MateriaUseCase } from '../../application/use-case/materia.usecase'
import { MateriaPrisma } from '../prisma/materia.prisma'
import { Request, Response } from 'express'
import { RequestError } from '@/core/errors/requestError'

const repo = new MateriaPrisma()
const usecase = new MateriaUseCase(repo)

export class MateriaController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { id_profesor } = req.params
    if (!id_profesor) throw new RequestError(400, 'ID Profesor is required')
    
    const { nombre, descripcion } = req.body

    const materia = await usecase.create({ nombre, descripcion, id_profesor })

    return res.status(201).json(materia)
  }
}
