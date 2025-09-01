export class RoleAdminError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'RoleAdminError'
  }
}

export class RoleAlumnoError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'RoleAlumnoError'
  }
}

export class RoleProfesorError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'RoleProfesorError'
  }
}
