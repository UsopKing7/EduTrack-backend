import { Router } from 'express'
import { ProfesorController } from '../controller/Profesor.controller'
import { rutaProtected } from '@/shared/middlewares/rutaProtected'
import { requiresUserRol } from '@/shared/middlewares/admin.middleware'

export const profesorRoutes = Router()

profesorRoutes.post('/create/profesor/:id_user', rutaProtected, requiresUserRol(['ADMIN']), ProfesorController.create)
profesorRoutes.get('/profesores', rutaProtected, requiresUserRol(['ADMIN']), ProfesorController.findAll)
