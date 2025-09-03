export interface RepositoryAlumno<T> {
  create(data: T): Promise<T | null>
  findById(id_user: string): Promise<T | null>
  findAll(): Promise<T[]>
  deleteAlumno(id_user: string): Promise<T | null>
  updateAlumno(data: T): Promise<T | null>
}
