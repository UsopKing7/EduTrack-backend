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

  async findById(id_materia: string): Promise<Materia | null> {
    return await this.materiaRepository.findById(id_materia)
  }

  async findAll(): Promise<Materia[]> {
    return await this.materiaRepository.findAll()
  }

  async deleteMateria(id_materia: string): Promise<Materia | null> {
    return await this.materiaRepository.deleteMateria(id_materia)
  }

  async updateMateria(data: materiaDTO): Promise<Materia | null> {
    const materia = await this.materiaRepository.findById(data.id_materia as string)
    if (!materia) throw new ApplicationError('Materia not found')

    const nombre = new Nombre(data.nombre)
    const descripcion = new Descripcion(data.descripcion)

    const materiaUpdate = new Materia(data.id_materia as string, nombre, descripcion, data.id_profesor)
    return await this.materiaRepository.updateMateria(materiaUpdate)
  }
}
