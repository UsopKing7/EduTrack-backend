import { Router } from 'express'
import { AlumnoController } from '../controllers/Alumno.controller'
import { rutaProtected } from '@/shared/middlewares/rutaProtected'
import { requiresUserRol } from '@/shared/middlewares/admin.middleware'

export const alumnoRoutes = Router()

alumnoRoutes.post('/create/alumno/:id_user', rutaProtected, requiresUserRol(['ADMIN']), AlumnoController.create)
alumnoRoutes.get('/alumnos', rutaProtected, requiresUserRol(['ADMIN']), AlumnoController.findAll)
alumnoRoutes.delete('/delete/alumno/:id_user', rutaProtected, requiresUserRol(['ADMIN']), AlumnoController.deleteAlumno)
alumnoRoutes.patch('/update/alumno/:id_user', rutaProtected, requiresUserRol(['ADMIN']), AlumnoController.updateAlumno)
