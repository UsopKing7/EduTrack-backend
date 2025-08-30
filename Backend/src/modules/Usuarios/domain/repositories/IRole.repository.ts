import { Role } from '../entities/Role'
import { RepositoryRole } from '@/core/interfaces/Role.interface'

export interface IRoleRepository extends RepositoryRole<Role | null> {
  create(data: Role): Promise<Role | null>
  findByRole(role: string): Promise<Role | null>
}
