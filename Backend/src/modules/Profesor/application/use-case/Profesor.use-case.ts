import { ProfesorDTO } from '../dto/Profesor.dto'
import { IProfesorRepository } from '@/modules/Profesor/domain/repositories/IProfesor.repositories'
import { Profesor } from '../../domain/intities/Profesor'
import { Especialidad } from '@/core/value-objects/Especialidad'
import { ApplicationError } from '@/core/errors/application.error'

export class ProfesorUseCase {
  constructor(private readonly profesorReposiory: IProfesorRepository) {}

  async create(data: ProfesorDTO): Promise<Profesor | null> {
    const id_profesor = data.id_profesor
    const id_user = data.id_user
    const especialidad = new Especialidad(data.especialidad)

    const profesorExists = await this.profesorReposiory.findById(id_user)
    if (profesorExists) throw new ApplicationError('Profesor already exists')

    const profesor = new Profesor(id_profesor as string, id_user, especialidad)

    return await this.profesorReposiory.create(profesor)
  }

  async findById(id_user: string): Promise<Profesor> {
    const profesor = await this.profesorReposiory.findById(id_user)
    if (!profesor) throw new ApplicationError('Profesor not found')

    return profesor
  }

  async findAll(): Promise<Profesor[]> {
    return await this.profesorReposiory.findAll()
  }

  async delteProfesor(id_user: string): Promise<Profesor> {
    const profesor = await this.profesorReposiory.findById(id_user)
    if (!profesor) throw new ApplicationError('Profesor not found')

    return profesor
  }

  async updateProfesor(data: Profesor): Promise<Profesor | null> {
    const profesor = await this.profesorReposiory.findById(data.getIdUser)
    if (!profesor) throw new ApplicationError('Profesor not found')

    const id_profesor = data.getIdProfesor
    const id_user = data.getIdUser
    const especialidad = new Especialidad(data.getEspecialidad.getEspecialidad)

    const profesorUpdated = new Profesor(id_profesor, id_user, especialidad)
    return await this.profesorReposiory.updateProfesor(profesorUpdated)
  }
}
