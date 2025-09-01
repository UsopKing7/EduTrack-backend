import { RolAdmin } from '../entities/RolAdmin'
import { RepositoryRoleAdmin, RepositoryRoleAlumno, RepositoryRoleProfesor } from '@/core/interfaces/Role.interface'
import { RolAlumno } from '../entities/RolAlumno'
import { RoleProfesor } from '../entities/RoleProfesor'

export interface RoleRepository extends RepositoryRoleAdmin<RolAdmin> {
  create(data: RolAdmin): Promise<RolAdmin | null>
  findByRole(id_user: string, role: 'ADMIN'): Promise<RolAdmin | null>
}

export interface RoleRepositoryAlumno extends RepositoryRoleAlumno<RolAlumno> {
  create(data: RolAlumno): Promise<RolAlumno | null>
  findByRole(id_user: string, rol: 'ALUMNO'): Promise<RolAlumno | null>
}

export interface RoleRepositoryProfesor extends RepositoryRoleProfesor<RoleProfesor> {
  create(data: RoleProfesor): Promise<RoleProfesor | null>
  findByRole(id_user: string, rol: 'PROFESOR'): Promise<RoleProfesor | null>
}
