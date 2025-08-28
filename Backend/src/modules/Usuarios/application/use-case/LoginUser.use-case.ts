import { Email } from '@/core/value-objects/Email.value'
import { ILoginRepository } from '@/modules/Usuarios/domain/repositories/ILogin.repositories'
import { Login } from '@/modules/Usuarios/domain/entities/Login'
import { Password } from '@/core/value-objects/Password.value'
import { LoginDTO } from '../dto/Login.dto'

export class LoginUserUseCase {
  constructor(private readonly loginRepository: ILoginRepository) {}

  async login(data: LoginDTO): Promise<Login | null> {
    const email = new Email(data.email)
    const user = await this.loginRepository.findByEmail(email.getValue())
    if (!user) throw new Error('Usuario no encontrado')

    const passwordValid = await Password.comparePassword(data.password, user.getPassword().getValue())
    if (!passwordValid) throw new Error('Contraseña incorrecta')

    return user
  }
}
