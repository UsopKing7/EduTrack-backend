import { RoleAlumnoDTO } from '../dto/roleAlumno.dto'
import { RoleRepositoryAlumno } from '@/modules/roles/domain/repositories/IRole.repository'
import { RolAlumno } from '@/modules/roles/domain/entities/RolAlumno'
import { RoleAlumnoError } from '@/core/errors/Role.error'

export class RoleAlumnoUseCase {
  constructor(private readonly roleRepository: RoleRepositoryAlumno) {}

  async create(data: RoleAlumnoDTO): Promise<RolAlumno | null> {
    const rol = new RolAlumno(data.id_user)
    const roleExists = await this.roleRepository.findByRole(data.id_user, 'ALUMNO')

    if (roleExists) throw new RoleAlumnoError('Role already exists')

    return await this.roleRepository.create(rol)
  }
}
