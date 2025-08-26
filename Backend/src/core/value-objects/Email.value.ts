export class Email {
  private readonly email: string

  constructor(email: string) {
    if (!email) throw new Error('Email is required')
    if (typeof email !== 'string') throw new Error('Email must be a string')
    if (!email.includes('@')) throw new Error('Email must be valid')
    if (!email.includes('.')) throw new Error('Email must be valid')
    
    this.email = email
  }

  getValue() {
    return this.email
  }
}
