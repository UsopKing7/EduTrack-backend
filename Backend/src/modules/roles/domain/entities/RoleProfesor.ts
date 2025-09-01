export class RoleProfesor {
  private readonly id_user: string
  private readonly rol: 'PROFESOR'

  constructor(id_user: string) {
    this.id_user = id_user
    this.rol = 'PROFESOR'
  }

  getIdUser() {
    return this.id_user
  }

  getRol() {
    return this.rol
  }
}
