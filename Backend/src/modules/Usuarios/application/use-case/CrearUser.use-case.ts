import { Email } from '@/core/value-objects/Email.value'
import { Nombre } from '@/core/value-objects/Nombre.value'
import { IUserRepository } from '../../domain/repositories/IUser.repositories'
import { createUserDTO } from '../dto/Crear.dto'
import { User } from '../../domain/entities/User'
import { Password } from '@/core/value-objects/Password.value'

export class CrearUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async create(data: createUserDTO): Promise<User | null> {
    const id_user = data.id_user
    const nombre = new Nombre(data.nombre)
    const password = new Password(data.password)
    const email = new Email(data.email)
    const emailExists = await this.userRepository.findByEmail(email.getValue())

    if (emailExists) throw new Error('Email already exists')

    const user = new User(id_user as string, email, nombre, password)
    return await this.userRepository.create(user)

  }

  async findUsers(): Promise<User[]> {
    const users =await this.userRepository.findUsers()
    if (!users) throw new Error('No se encontraron usuarios')

    return users
  }
}