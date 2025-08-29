import { Token } from '@/modules/Usuarios/domain/entities/Token'
import { TokenRepository } from '@/modules/Usuarios/domain/repositories/IToken.repository'
import { TokenDTO } from '../dto/Token.dto'

export class TokenUseUseCase {
  constructor(private readonly tokenRepository: TokenRepository) {}

  async create(data: TokenDTO): Promise<Token | null> {
    const token = new Token(data.id_user, data.token)
    const tokenExists = await this.tokenRepository.findById(data.id_user)

    if (tokenExists) return tokenExists

    return await this.tokenRepository.create(token)
  }
}
