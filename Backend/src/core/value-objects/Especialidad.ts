import { ValueError } from "../errors/value.error"

export class Especialidad {
  private readonly especialidad: string

  constructor(especialidad: string) {

    if (!especialidad) throw new ValueError('Especialidad is required')
    if (especialidad.length < 3) throw new ValueError('Especialidad must be at least 3 characters')
    if (especialidad.length > 50) throw new ValueError('Especialidad must be at most 50 characters')
    if (typeof especialidad !== 'string') throw new ValueError('Especialidad must be a string')

    this.especialidad = especialidad
  }

  get getEspecialidad() {
    return this.especialidad
  }
}
