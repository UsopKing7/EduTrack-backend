import { IRoleRepository } from '../../domain/repositories/IRole.repository'
import { Role } from '../../domain/entities/Role'
import { RoleDTO } from '../dto/Role.dto'

export class RoleUserUseCase {
  constructor(private readonly roleRepository: IRoleRepository) {}

  async create(data: RoleDTO) {
    const role = new Role(data.id_user, data.role)
    const roleExiste = await this.roleRepository.findByRole(data.role)

    if (roleExiste) return roleExiste

    return await this.roleRepository.create(role)
  }
}
