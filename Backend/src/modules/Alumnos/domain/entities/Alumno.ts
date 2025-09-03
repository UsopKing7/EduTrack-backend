import { Carrera } from "@/core/value-objects/Carrera.value"

export class Alumno {
  private readonly id_alumno: string
  private readonly id_user: string
  private readonly carrera: Carrera

  constructor(id_alumno: string, id_user: string, carrera: Carrera) {
    this.id_alumno = id_alumno
    this.id_user = id_user
    this.carrera = carrera
  }

  get getIdAlumno() {
    return this.id_alumno
  }

  get getIdUser() {
    return this.id_user
  }

  get getCarrera() {
    return this.carrera
  }
}
