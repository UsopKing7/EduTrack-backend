export interface RepositoryRoleAdmin<T> {
  create(data: T): Promise<T | null>
  findByRole(id_user: string, role: 'ADMIN'): Promise<T | null>
}
