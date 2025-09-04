import { RepositoryProfesor } from '@/core/interfaces/Profesor.interface'
import { Profesor } from '../intities/Profesor'

export interface IProfesorRepository extends RepositoryProfesor<Profesor> {
  create(data: Profesor): Promise<Profesor | null>
  findById(id_user: string): Promise<Profesor | null>
  findAll(): Promise<Profesor[]>
  deleteProfesor(id_user: string): Promise<Profesor | null>
  updateProfesor(data: Profesor): Promise<Profesor | null>
}
