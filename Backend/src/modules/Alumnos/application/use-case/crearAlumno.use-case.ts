import { AlumnoDTO } from '../dto/Alumno.dto'
import { AlumnoRepository } from '@/modules/Alumnos/domain/repositories/IAlumno.repositori'
import { Alumno } from '../../domain/entities/Alumno'
import { ApplicationError } from '@/core/errors/application.error'
import { Carrera } from '@/core/value-objects/Carrera.value'

export class CrearAlumnoUseCase {
  constructor(private readonly alumnoRepository: AlumnoRepository) {}

  async create(data: AlumnoDTO): Promise<Alumno | null> {
    const id_alumno = data.id_alumno
    const id_user = data.id_user
    const carrera = new Carrera(data.carrera)

    const alumnoExiste = await this.alumnoRepository.findById(data.id_user)
    if (alumnoExiste) throw new ApplicationError('Alumno already exists')
        
    const alumno = new Alumno( id_alumno as string, id_user, carrera )

    return await this.alumnoRepository.create(alumno)
  }
}
 