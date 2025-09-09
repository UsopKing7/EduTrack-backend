import { ValueError } from "../errors/value.error"

export class Nombre {
  private readonly nombre: string

  constructor(nombre: string) {
    if (!nombre) throw new ValueError('Nombre is required')
    if (typeof nombre !== 'string') throw new ValueError('Nombre must be a string')
    if (nombre.length < 2) throw new ValueError('Nombre must be at least 2 characters')
    
    this.nombre = nombre
  }

  getValue(): string {
    return this.nombre
  }
}
