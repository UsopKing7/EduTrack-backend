export interface RepositoryUser<T> {
  create(data: T): Promise<T | null>
  findByEmail(email: string): Promise<T | null>
}

export interface RepositoryLogin<T> {
  findByEmail(email: string): Promise<T | null>
}
