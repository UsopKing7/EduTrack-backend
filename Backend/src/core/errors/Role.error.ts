export class RoleAdminError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'RoleAdminError'
  }
}