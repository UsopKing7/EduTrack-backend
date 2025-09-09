import { Router } from 'express'
import { MateriaController } from '../controllers/Materia.controller'

export const materiasRoutes = Router()

materiasRoutes.post('/create/materia/:id_profesor', MateriaController.create)
materiasRoutes.get('/materias/', MateriaController.findAll)
materiasRoutes.patch('/update/materia/:id_materia/:id_profesor', MateriaController.updateMateria)
materiasRoutes.delete('/delete/materia/:id_materia', MateriaController.deleteMateria)
