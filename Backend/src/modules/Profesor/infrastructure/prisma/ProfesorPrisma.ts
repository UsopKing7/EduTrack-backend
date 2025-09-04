import { prisma } from '@/shared/config/db'
import { Profesor } from '../../domain/intities/Profesor'
import { IProfesorRepository } from '../../domain/repositories/IProfesor.repositories'
import { Especialidad } from '@/core/value-objects/Especialidad'

export class ProfesorPrisma implements IProfesorRepository {
  async create(data: Profesor): Promise<Profesor | null> {
    return await prisma.$transaction(async (prisma) => {
      const user = await prisma.user.findFirst({
        where: {
          id_user: data.getIdUser,
          roles: {
            some: { rol: 'PROFESOR' }
          }
        }
      })

      if (!user) throw new Error('User not found')

      const profesor = await prisma.profesor.create({
        data: {
          id_user: data.getIdUser,
          especialidad: data.getEspecialidad.getEspecialidad
        },

        select: {
          id_profesor: true,
          id_user: true,
          especialidad: true
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

      return new Profesor(
        profesor.id_profesor,
        profesor.id_user,
        new Especialidad(profesor.especialidad as string)
      )
    })
  }

  async findById(id_user: string): Promise<Profesor | null> {
    const profesor = await prisma.profesor.findUnique({
      where: {
        id_user: id_user
      },

      select: {
        id_profesor: true,
        id_user: true,
        especialidad: true
      }
    })

    if (!profesor) return null
    return new Profesor(
      profesor.id_profesor,
      profesor.id_user,
      new Especialidad(profesor.especialidad as string)
    )
  }

  async findAll(): Promise<Profesor[]> {
    const profesores = await prisma.profesor.findMany({
      select: {
        id_profesor: true,
        id_user: true,
        especialidad: true,
        user: {
          select: {
            nombre: true,
            email: true
          }
        }
      }
    })

    return profesores.map((profesor) => {
      return new Profesor(
        profesor.id_profesor,
        profesor.id_user,
        new Especialidad(profesor.especialidad as string)
      )
    })
  }

  async deleteProfesor(id_user: string): Promise<Profesor | null> {
    return await prisma.$transaction(async (prisma) => {
      const profesor = await prisma.profesor.findUnique({
        where: {
          id_user: id_user
        }
      })

      if (!profesor) throw new Error('Profesor not found')

      await prisma.profesor.delete({
        where: {
          id_user: id_user
        }
      })

      await prisma.user.update({
        where: {
          id_user: id_user
        },

        data: {
          is_active: false
        }
      })

      return new Profesor(
        profesor.id_profesor,
        profesor.id_user,
        new Especialidad(profesor.especialidad as string)
      )
    })
  }

  async updateProfesor(data: Profesor): Promise<Profesor | null> {
    return await prisma.$transaction(async (prisma) => {
      const profesor = await prisma.profesor.findUnique({
        where: {
          id_user: data.getIdUser
        }
      })

      if (!profesor) throw new Error('Profesor not found')

      await prisma.profesor.update({
        where: {
          id_user: data.getIdUser
        },

        data: {
          especialidad: data.getEspecialidad.getEspecialidad
        }
      })

      return new Profesor(
        profesor.id_profesor,
        profesor.id_user,
        new Especialidad(profesor.especialidad as string)
      )
    })
  }
}
