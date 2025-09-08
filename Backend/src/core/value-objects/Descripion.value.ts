import { ValueError } from "../errors/value.error"

export class Descripcion {
  private readonly descripcion: string
  constructor(descripcion: string) {
    if (!descripcion) throw new ValueError('Descripcion is required')
    if (descripcion.length < 3) throw new ValueError('Descripcion must be at least 3 characters')
    if (typeof descripcion !== 'string') throw new ValueError('Descripcion must be a string')
    this.descripcion = descripcion
  }

  get getDescripcion() {
    return this.descripcion
  }
}
