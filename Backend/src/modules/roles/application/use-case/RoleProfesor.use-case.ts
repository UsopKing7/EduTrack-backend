import { RoleRepositoryProfesor } from '@/modules/roles/domain/repositories/IRole.repository'
import { RoleProfesorDTO } from '../dto/roleProfesor'
import { RoleProfesor } from '../../domain/entities/RoleProfesor'
import { RoleProfesorError } from '@/core/errors/Role.error'
export class RoleProfesorUseCase {
  constructor(private readonly roleRepository: RoleRepositoryProfesor) {}

  async create(data: RoleProfesorDTO): Promise<RoleProfesor | null> {
    const rol = new RoleProfesor(data.id_user)

    const rolExists = await this.roleRepository.findByRole(data.id_user, 'PROFESOR')
    if (rolExists) throw new RoleProfesorError('Role already exists')

    return await this.roleRepository.create(rol)
  }
}
