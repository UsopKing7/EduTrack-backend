export interface RepositoryToken<T> {
  create(data: T): Promise<T | null>
  findById(id_user: string): Promise<T | null>
}
