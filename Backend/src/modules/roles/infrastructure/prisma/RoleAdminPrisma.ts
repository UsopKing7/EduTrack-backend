import { prisma } from '@/shared/config/db'
import { RolAdmin } from '../../domain/entities/RolAdmin'
import { RoleRepository } from '@/modules/roles/domain/repositories/IRole.repository'

export class RoleAdminPrisma implements RoleRepository {
  async create(data: RolAdmin): Promise<RolAdmin | null> {
    const role = await prisma.userRol.create({
      data: {
        id_user: data.getIdUser(),
        rol: data.getRol()
      },
      select: {
        id_user: true,
        rol: true
      }
    })

    return new RolAdmin(role.id_user)
  }

  async findByRole(id_user: string, rol: 'ADMIN'): Promise<RolAdmin | null> {
    const roleExists = await prisma.userRol.findUnique({
      where: {
        id_user_rol: {
          id_user,
          rol: rol
        }
      }
    })

    if (!roleExists) return null
    return new RolAdmin(roleExists.id_user)
  }
}
