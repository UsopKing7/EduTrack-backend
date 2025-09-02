import { RoleAdminController } from '../controllers/RoleAdmin.controller'
import { Router } from 'express'
import { RoleAlumnoController } from '../controllers/RoleAlumno.controller'
import { RoleProfesorController } from '../controllers/RoleProfesor.controller'
import { requiresUserRol } from '@/shared/middlewares/admin.middleware'
import { rutaProtected } from '@/shared/middlewares/rutaProtected'

export const roleRoutes = Router()

roleRoutes.post('/assign/roleAdmin/:id_user', rutaProtected, requiresUserRol(['ADMIN']), RoleAdminController.create)
roleRoutes.post('/assign/roleAlumno/:id_user', rutaProtected, requiresUserRol(['ADMIN']), RoleAlumnoController.create)
roleRoutes.post('/assign/roleProfesor/:id_user', rutaProtected, requiresUserRol(['ADMIN']), RoleProfesorController.create)
