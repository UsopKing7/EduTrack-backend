import { prisma } from '@/shared/config/db'
import { AlumnoRepository } from '@/modules/Alumnos/domain/repositories/IAlumno.repositori'
import { Alumno } from '@/modules/Alumnos/domain/entities/Alumno'
import { Carrera } from '@/core/value-objects/Carrera.value'

export class CreateAlumnoPrisma implements AlumnoRepository {
  async create(data: Alumno): Promise<Alumno> {
    const user = await prisma.user.findFirst({
      where: {
        id_user: data.getIdUser,
        roles: {
          some: {
            rol: 'ALUMNO'
          }
        }
      }
    })

    if (!user) throw new Error('User not found')

    const alumno = await prisma.alumno.create({
      data: {
        id_user: data.getIdUser,
        carrera: data.getCarrera.getCarrera
      },

      select: {
        id_alumno: true,
        id_user: true,
        carrera: true
      }
    })
    
    return new Alumno(
      alumno.id_alumno,
      alumno.id_user,
      new Carrera(alumno.carrera as string)
    )
  }

  async findById(id_user: string): Promise<Alumno | null> {
    const alumno = await prisma.alumno.findUnique({
      where: {
        id_user: id_user
      },

      select: {
        id_alumno: true,
        id_user: true,
        carrera: true
      }
    })

    if (!alumno) return null
    return new Alumno(
      alumno.id_alumno,
      alumno.id_user,
      new Carrera(alumno.carrera as string)
    )
  }
}
