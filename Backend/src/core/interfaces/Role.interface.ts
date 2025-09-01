export interface RepositoryRoleAdmin<T> {
  create(data: T): Promise<T | null>
  findByRole(id_user: string, role: 'ADMIN'): Promise<T | null>
}

export interface RepositoryRoleAlumno<T> {
  create(data: T): Promise<T | null>
  findByRole(id_user: string, rol: 'ALUMNO'): Promise<T | null>
}


export interface RepositoryRoleProfesor<T> {
  create(data: T): Promise<T | null>
  findByRole(id_user: string, rol: 'PROFESOR'): Promise<T | null>
}
