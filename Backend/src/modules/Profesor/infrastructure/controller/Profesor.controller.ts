import { Request, Response } from 'express'
import { ProfesorUseCase } from '../../application/use-case/Profesor.use-case'
import { ProfesorPrisma } from '../prisma/ProfesorPrisma'
import { RequestError } from '@/core/errors/requestError'
import { redis } from '@/shared/config/redis'
import { deleteCache, saveCache, verificache } from '@/shared/utils/redis.utils'

const repo = new ProfesorPrisma()
const usecase = new ProfesorUseCase(repo)

const key = 'get:profesores'

export class ProfesorController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params
    if (!id_user) throw new RequestError(400, 'ID User is required')

    const { especialidad } = req.body

    deleteCache(key)

    const profesor = await usecase.create({ id_user, especialidad })
    return res.status(201).json(profesor)
  }

  static async findAll(_req: Request, res: Response): Promise<Response> {
    const cache = await redis.get(key)
    const profesoresCache = verificache(cache)
    if (profesoresCache !== null) return res.status(200).json(profesoresCache)

    const profesores = await usecase.findAll()
    const { expire, value } = saveCache(profesores)
    await redis.set(key, value, expire)

    return res.status(200).json(profesores)
  }

  static async deleteProfesor(req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params

    const profesorDeleted = await usecase.delteProfesor(id_user)

    return res.status(200).json(profesorDeleted)
  }

  static async updateProfesor(req: Request, res: Response): Promise<Response> {
    const { id_user } = req.params
    const { especialidad } = req.body

    const profesorUpdated = await usecase.updateProfesor({ id_user, especialidad })

    return res.status(200).json(profesorUpdated)
  }
}
