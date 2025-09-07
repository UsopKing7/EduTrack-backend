import { DomainError } from "@/core/errors/domain.error"
import { Especialidad } from "@/core/value-objects/Especialidad"

export class Profesor {
  private readonly id_profesor: string | null
  private readonly id_user: string
  private readonly especialidad: Especialidad

  constructor(id_profesor: string, id_user: string, especialidad: Especialidad) {

    if (!id_user) throw new DomainError('Id User is required')
    if (!especialidad) throw new DomainError('Especialidad is required')
    if (especialidad.getEspecialidad.length < 3) throw new DomainError('Especialidad must be at least 3 characters')
    if (especialidad.getEspecialidad.length > 50) throw new DomainError('Especialidad must be at most 50 characters')

    this.id_profesor = id_profesor
    this.id_user = id_user
    this.especialidad = especialidad
  }

  get getIdProfesor() {
    return this.id_profesor
  }

  get getIdUser() {
    return this.id_user
  }

  get getEspecialidad() {
    return this.especialidad
  }
}
