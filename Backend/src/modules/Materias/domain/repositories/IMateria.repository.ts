import { RepositoryMateria } from '@/core/interfaces/Materia.interface'
import { Materia } from '../entities/Materia'

export interface IMateriaRepository extends RepositoryMateria<Materia> {
  create(data: Materia): Promise<Materia | null>
  findById(id_materia: string): Promise<Materia | null>
  findAll(): Promise<Materia[]>
  deleteMateria(id_materia: string): Promise<Materia | null>
  updateMateria(data: Materia): Promise<Materia | null>
}
