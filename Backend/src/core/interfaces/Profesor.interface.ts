export interface RepositoryProfesor<T> {
  create(data: T): Promise<T | null>
  findById(id_user: string): Promise<T | null>
  findAll(): Promise<T[] | null>
  deleteProfesor(id_user: string): Promise<T | null>
  updateProfesor(data: T): Promise<T | null>
}
