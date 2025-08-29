import { Token } from '../entities/Token'
import { RepositoryToken } from '@/core/interfaces/Token.interface'

export interface TokenRepository extends RepositoryToken<Token> {
  create(data: Token): Promise<Token | null>
  findById(id_user: string): Promise<Token | null>
}
