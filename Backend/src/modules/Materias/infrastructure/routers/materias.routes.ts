import { Router } from 'express'
import { MateriaController } from '../controllers/Materia.controller'

export const materiasRoutes = Router()

materiasRoutes.post('/create/materia/:id_profesor', MateriaController.create)
