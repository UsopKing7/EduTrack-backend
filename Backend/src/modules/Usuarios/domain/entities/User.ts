import { BaseEntities } from '@/core/entities/BaseEntities'
import { Email } from '@/core/value-objects/Email.value'
import { Nombre } from '@/core/value-objects/Nombre.value'
import { Password } from '@/core/value-objects/Password.value'

export class User extends BaseEntities {
  private readonly id_user: string
  private readonly email: Email
  private readonly nombre: Nombre
  private readonly password: Password
  constructor(id_user: string, email: Email, nombre: Nombre, password: Password) {
    super()
    this.id_user = id_user
    this.email = email
    this.nombre = nombre
    this.password = password
  }
  
  getEmail() {
    return this.email
  }

  getNombre() {
    return this.nombre
  }

  getId() {
    return this.id_user
  }

  getPassword() {
    return this.password
  }
}
