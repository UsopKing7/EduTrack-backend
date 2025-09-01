export class RolAdmin {
  private readonly id_user: string
  private readonly rol: 'ADMIN'

  constructor(id_user: string) {
    this.id_user = id_user
    this.rol = 'ADMIN'
  }

  getIdUser() {
    return this.id_user
  }

  getRol() {
    return this.rol
  }
}
