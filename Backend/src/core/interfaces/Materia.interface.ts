export interface RepositoryMateria<T> {
  create(data: T): Promise<T | null>
  findById(id_materia: string): Promise<T | null>
  findAll(): Promise<T[]>
  deleteMateria(id_materia: string): Promise<T | null>
  updateMateria(data: T): Promise<T | null>
}
