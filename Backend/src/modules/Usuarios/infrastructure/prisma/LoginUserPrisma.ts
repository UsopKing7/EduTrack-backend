import { prisma } from '@/shared/config/db'
import { Password } from '@/core/value-objects/Password.value'
import { ILoginRepository } from '../../domain/repositories/ILogin.repositories'
import { Login } from '../../domain/entities/Login'
import { Email } from '@/core/value-objects/Email.value'

export class LoginUserPrisma implements ILoginRepository {
  async findByEmail(email: string): Promise<Login | null> {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) return null

    return new Login(
      new Email(user.email),
      new Password(user.password)
    )
  }
}
