import { Descripcion } from '@/core/value-objects/Descripion.value'
import { Materia } from '../../domain/entities/Materia'
import { IMateriaRepository } from '../../domain/repositories/IMateria.repository'
import { Nombre } from '@/core/value-objects/Nombre.value'
import { prisma } from '@/shared/config/db'

export class MateriaPrisma implements IMateriaRepository {
  async create(data: Materia): Promise<Materia | null> {
    const materia = await prisma.materia.create({
      data: {
        nombre: data.getNombre.getValue(),
        descripcion: data.getDescripcion.getDescripcion,
        id_profesor: data.getIdProfesor
      },

      select: {
        id_materia: true,
        nombre: true,
        descripcion: true,
        id_profesor: true
      }
    })

    return new Materia(
      materia.id_materia,
      new Nombre(materia.nombre),
      new Descripcion(materia.descripcion as string),
      materia.id_profesor
    )
  }

  async findById(id_materia: string): Promise<Materia | null> {
    const materia = await prisma.materia.findUnique({
      where: {
        id_materia: id_materia
      },

      select: {
        id_materia: true,
        nombre: true,
        descripcion: true,
        id_profesor: true
      }
    })

    if (!materia) return null

    return new Materia(
      materia.id_materia,
      new Nombre(materia.nombre),
      new Descripcion(materia.descripcion as string),
      materia.id_profesor
    )
  }

  async findAll(): Promise<Materia[]> {
    const materias = await prisma.materia.findMany({
      select: {
        id_materia: true,
        nombre: true,
        descripcion: true,
        id_profesor: true
      }
    })

    return materias.map((materia) => {
      return new Materia(
        materia.id_materia,
        new Nombre(materia.nombre),
        new Descripcion(materia.descripcion as string),
        materia.id_profesor
      )
    })
  }

  async deleteMateria(id_materia: string): Promise<Materia | null> {
    const materia = await prisma.materia.delete({
      where: {
        id_materia: id_materia
      },

      select: {
        id_materia: true,
        nombre: true,
        descripcion: true,
        id_profesor: true
      }
    })

    return new Materia(
      materia.id_materia,
      new Nombre(materia.nombre),
      new Descripcion(materia.descripcion as string),
      materia.id_profesor
    )
  }

  async updateMateria(data: Materia): Promise<Materia | null> {
    const materia = await prisma.materia.update({
      where: {
        id_materia: data.getIdMateria
      },

      data: {
        nombre: data.getNombre.getValue(),
        descripcion: data.getDescripcion.getDescripcion,
      },

      select: {
        id_materia: true,
        nombre: true,
        descripcion: true,
        id_profesor: true
      }
    })

    return new Materia(
      materia.id_materia,
      new Nombre(materia.nombre),
      new Descripcion(materia.descripcion as string),
      materia.id_profesor
    )
  }
}