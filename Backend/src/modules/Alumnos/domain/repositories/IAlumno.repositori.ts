import { Alumno } from '../entities/Alumno'
import { RepositoryAlumno } from '@/core/interfaces/Alumno.interface'

export interface AlumnoRepository extends RepositoryAlumno<Alumno> {
  create(data: Alumno): Promise<Alumno | null>
  findById(id_user: string): Promise<Alumno | null>
}
