import { prisma } from '@/shared/config/db'
import { User } from '@/modules/Usuarios/domain/entities/User'
import { Email } from '@/core/value-objects/Email.value'
import { Nombre } from '@/core/value-objects/Nombre.value'
import { Password } from '@/core/value-objects/Password.value'
import { IUserRepository } from '../../domain/repositories/IUser.repositories'

export class CrearUserPrisma implements IUserRepository {
  async create(data: User): Promise<User | null> {
    const passwordHashed = await Password.hashPassword(data.getPassword().getValue())
    const user = await prisma.user.create({
      data: {
        nombre: data.getNombre().getValue(),
        email: data.getEmail().getValue(),
        password: passwordHashed
      },
      select: {
        id_user: true,
        email: true,
        nombre: true,
        password: true
      }
    })

    return new User(
      user.id_user,
      new Email(user.email),
      new Nombre(user.nombre),
      new Password(user.password)
    )
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id_user: true,
        email: true,
        nombre: true,
        password: true
      }
    })

    if (!user) return null

    return new User(
      user.id_user,
      new Email(user.email),
      new Nombre(user.nombre),
      new Password(user.password)
    )
  }
}