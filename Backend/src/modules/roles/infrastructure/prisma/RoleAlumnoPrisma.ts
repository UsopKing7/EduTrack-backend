import { RolAlumno } from '../../domain/entities/RolAlumno'
import { RoleRepositoryAlumno } from '@/modules/roles/domain/repositories/IRole.repository'
import { prisma } from '@/shared/config/db'

export class RoleAlumnoPrisma implements RoleRepositoryAlumno {
  async create(data: RolAlumno): Promise<RolAlumno | null> {
    const role = await prisma.userRol.create({
      data: {
        id_user: data.getIdUser(),
        rol: data.getRol()
      },
      select:  {
        id_user: true,
        rol: true
      }
    })

    return new RolAlumno(role.id_user)
  }

  async findByRole(id_user: string, rol: 'ALUMNO'): Promise<RolAlumno | null> {
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
    return new RolAlumno(roleExists.id_user)
  }
}