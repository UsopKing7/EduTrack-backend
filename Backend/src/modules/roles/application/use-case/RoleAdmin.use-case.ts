import { RoleAdminDTO } from '../dto/roleAdmin.dto'
import { RoleRepository } from '../../domain/repositories/IRole.repository'
import { RolAdmin } from '../../domain/entities/RolAdmin'
import { RoleAdminError } from '@/core/errors/Role.error'

export class RoleAdminUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}

  async create(data: RoleAdminDTO): Promise<RolAdmin | null> {
    const role = new RolAdmin(data.id_user)
    const roleExists = await this.roleRepository.findByRole(data.id_user, 'ADMIN')

    if (roleExists) throw new RoleAdminError('Role already exists')

    return await this.roleRepository.create(role)
  }

  async findByRole(id_user: string, rol: 'ADMIN'): Promise<RolAdmin | null> {
    return await this.roleRepository.findByRole(id_user, rol)
  }
}
