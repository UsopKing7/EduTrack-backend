import { RolAdmin } from '../entities/RolAdmin'
import { RepositoryRoleAdmin } from '@/core/interfaces/Role.interface'

export interface RoleRepository extends RepositoryRoleAdmin<RolAdmin> {
  create(data: RolAdmin): Promise<RolAdmin | null>
  findByRole(id_user: string,role: 'ADMIN'): Promise<RolAdmin | null>
}
