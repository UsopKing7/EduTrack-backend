import { prisma } from '@/shared/config/db'
import { AlumnoRepository } from '@/modules/Alumnos/domain/repositories/IAlumno.repositori'
import { Alumno } from '@/modules/Alumnos/domain/entities/Alumno'
import { Carrera } from '@/core/value-objects/Carrera.value'

export class CreateAlumnoPrisma implements AlumnoRepository {
  async create(data: Alumno): Promise<Alumno> {
    return await prisma.$transaction(async (prisma) => {

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
            carrera: data.getCarrera.getCarrera,
          },
          
          select: {
            id_alumno: true,
            id_user: true,
            carrera: true
          }
        })
        
        await prisma.user.update({
          where: {
            id_user: data.getIdUser
          },
          
          data: {
            is_active: true
          }
        })
        
        return new Alumno(
          alumno.id_alumno,
          alumno.id_user,
          new Carrera(alumno.carrera as string)
        )
      })
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
      
      async findAll(): Promise<Alumno[]> {
        const alumnos = await prisma.alumno.findMany({
          include: {
            user: true
          },
          where: {
            user: {
              roles: {
                some: {
                  rol: 'ALUMNO'
                }
              }
            }
          }
        })
        
        return alumnos.map((alumno) => {
          return new Alumno(
            alumno.id_alumno,
            alumno.id_user,
            new Carrera(alumno.carrera as string)
          )
        })
  }

  async deleteAlumno(id_user: string): Promise<Alumno | null> {
    return await prisma.$transaction(async (prisma) => {
      const alumno = await prisma.alumno.findUnique({
        where: {
          id_user: id_user
        }
      })
      if (!alumno) return null

      await prisma.alumno.delete({
        where: {
          id_user: id_user
        }
      })

      await prisma.user.update({
        data: {
          is_active: false
        },

        where: {
          id_user: id_user
        }
      })
      return new Alumno(
        alumno.id_alumno,
        alumno.id_user,
        new Carrera(alumno.carrera as string)
      )
    })
  }

  async updateAlumno(data: Alumno): Promise<Alumno | null> {
    return await prisma.$transaction(async (prisma) => {
      const alumno = await prisma.alumno.findUnique({
        where: { id_user: data.getIdUser }
      })

      if (!alumno) return null

      await prisma.alumno.update({
        data: {
          carrera: data.getCarrera.getCarrera
        },
        where: {
          id_user: data.getIdUser
        }
      })

      return new Alumno(
        alumno.id_alumno,
        alumno.id_user,
        new Carrera(alumno.carrera as string)
      )
    })
  }

}
