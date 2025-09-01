export class RolAlumno {
  private readonly id_user: string
  private readonly rol: 'ALUMNO'

  constructor(id_user: string) {
    this.id_user = id_user
    this.rol = 'ALUMNO'
  }

  getIdUser() {
    return this.id_user
  }

  getRol() {
    return this.rol
  }
}
