import { ValueError } from "../errors/value.error"

export class Carrera {
  private readonly carrera: string

  constructor(carrera: string) {
    if (!carrera) throw new ValueError('Carrera is required')
    if (typeof carrera !== 'string') throw new ValueError('Carrera must be a string')
    this.carrera = carrera
  }

  get getCarrera() {
    return this.carrera
  }
}
