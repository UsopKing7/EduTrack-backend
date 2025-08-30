export class Role {
  private readonly id_user: string
  private readonly role: string

  constructor( id_user: string, role: string) {
    this.id_user = id_user
    this.role = role
  }

  getId() {
    return this.id_user
  }

  getRole() {
    return this.role
  }
}
