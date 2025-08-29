export class Token {
  private readonly id_user: string
  private readonly token: string

  constructor( id_user: string, token: string) {
    this.id_user = id_user
    this.token = token
  }

  getId() {
    return this.id_user
  }

  getToken() {
    return this.token
  }
}
