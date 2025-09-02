import { RepositoryUser } from '@/core/interfaces/User.interface'
import { User } from '../entities/User'

export interface IUserRepository extends RepositoryUser<User | null> {
  create(data: User): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  findUsers(): Promise<User[]>
}
