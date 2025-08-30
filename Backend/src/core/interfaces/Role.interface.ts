export interface RepositoryRole<T> {
  create(data: T): Promise<T | null>
  findByRole(role: string): Promise<T | null>
}
