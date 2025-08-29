import { TokenRepository } from '@/modules/Usuarios/domain/repositories/IToken.repository'
import { Token } from '../../domain/entities/Token'
import { prisma } from '@/shared/config/db'

export class TokenUserPrisma implements TokenRepository {
  async create(data: Token): Promise<Token | null> {
    const token = await prisma.token.create({
      data: {
        id_user: data.getId(),
        token: data.getToken()
      }
    })

    return new Token(
      token.id_user,
      token.token
    )
  }

  async findById(id_user: string): Promise<Token | null> {
    const token = await prisma.token.findUnique({
      where: { id_user }
    })

    if (!token) return null

    return new Token(
      token.id_user,
      token.token
    )
  }
}
