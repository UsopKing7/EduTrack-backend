export class Nombre {
  private readonly nombre: string

  constructor(nombre: string) {
    if (!nombre) throw new Error('Nombre is required')
    if (typeof nombre !== 'string') throw new Error('Nombre must be a string')
    
    this.nombre = nombre
  }

  getValue() {
    return this.nombre
  }
}
