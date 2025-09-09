import { ApplicationError } from '@/core/errors/application.error'
import { Materia } from '../../domain/entities/Materia'
import { IMateriaRepository } from '../../domain/repositories/IMateria.repository'
import { materiaDTO } from '../dto/materia.dto'
import { Nombre } from '@/core/value-objects/Nombre.value'
import { Descripcion } from '@/core/value-objects/Descripion.value'

export class MateriaUseCase {
  constructor(private readonly materiaRepository: IMateriaRepository) {}

  async create(data: materiaDTO): Promise<Materia | null> {
    const nombre = new Nombre(data.nombre)
    const descripcion = new Descripcion(data.descripcion)
    const id_profesor = data.id_profesor

    const materiaExists = await this.materiaRepository.findByMateria(nombre.getValue())
    if (materiaExists) throw new ApplicationError('Materia already exists')

    const materia = new Materia(data.id_materia as string, nombre, descripcion, id_profesor)

    return await this.materiaRepository.create(materia)
  }
}
