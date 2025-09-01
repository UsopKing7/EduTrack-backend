import { prisma } from '@/shared/config/db'
import { RoleRepositoryProfesor } from '../../domain/repositories/IRole.repository'
import { RoleProfesor } from '../../domain/entities/RoleProfesor'

export class RoleProfesorPrisma implements RoleRepositoryProfesor {
  async create(data: RoleProfesor): Promise<RoleProfesor | null> {
    const rol = await prisma.userRol.create({
      data: {
        id_user: data.getIdUser(),
        rol: data.getRol()
      },

      select: {
        id_user: true,
        rol: true
      }
    })

    return new RoleProfesor(rol.id_user)
  }

  async findByRole(id_user: string, rol: 'PROFESOR'): Promise<RoleProfesor | null> {
    const roleExists = await prisma.userRol.findUnique({
      where: {
        id_user_rol: {
          id_user,
          rol: rol
        }
      },

      select: {
        id_user: true,
        rol: true
      }
    })

    if (!roleExists) return null
    return new RoleProfesor(roleExists.id_user)
  }
}
