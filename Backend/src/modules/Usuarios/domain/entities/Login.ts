import { BaseEntities } from '@/core/entities/BaseEntities'
import { Email } from '@/core/value-objects/Email.value'
import { Password } from '@/core/value-objects/Password.value'

export class Login extends BaseEntities {
  private readonly email: Email
  private readonly password: Password

  constructor(email: Email, password: Password) {
    super()
    this.email = email
    this.password = password
  }

  getEmail() {
    return this.email
  }

  getPassword() {
    return this.password
  }
}
