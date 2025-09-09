import { ValueError } from "@/core/errors/value.error"
import { Descripcion } from "@/core/value-objects/Descripion.value"
import { Nombre } from "@/core/value-objects/Nombre.value"

export class Materia {
  private readonly id_materia: string
  private readonly nombre: Nombre
  private readonly descripcion: Descripcion
  private readonly id_profesor: string

  constructor(id_materia: string, nombre: Nombre, descripcion: Descripcion, id_profesor: string) {
    if (!nombre) throw new ValueError('Nombre is required')
    if (!descripcion) throw new ValueError('Descripcion is required')
    if (!id_profesor) throw new ValueError('Id Profesor is required')
    
    this.id_materia = id_materia
    this.nombre = nombre
    this.descripcion = descripcion
    this.id_profesor = id_profesor
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
