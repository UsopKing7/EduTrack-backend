import { ValueError } from "@/core/errors/value.error"
import { Descripcion } from "@/core/value-objects/Descripion.value"
import { Nombre } from "@/core/value-objects/Nombre.value"

export class Materia {
  private readonly id_materia: string
  private readonly nombre: Nombre
  private readonly descripcion: Descripcion
  private readonly id_profesor: string

  constructor(id_materia: string, nombre: Nombre, descripcion: Descripcion, id_profesor: string) {
    if (!descripcion) throw new ValueError('Descripcion is required')
    if (descripcion.getDescripcion.length < 3) throw new ValueError('Descripcion must be at least 3 characters')
    if (typeof descripcion !== 'string') throw new ValueError('Descripcion must be a string')
    if (!id_profesor) throw new ValueError('Id Profesor is required')
    if (typeof id_profesor !== 'string') throw new ValueError('Id Profesor must be a string')
    
    this.id_materia = id_materia
    this.nombre = nombre
    this.descripcion = descripcion
    this.id_profesor = id_materia
  }

  get getIdMateria() {
    return this.id_materia
  }

  get getNombre() {
    return this.nombre
  }

  get getDescripcion() {
    return this.descripcion
  }

  get getIdProfesor() {
    return this.id_profesor
  }
}
