import { RoleAdminController } from '../controllers/RoleAdmin.controller'
import { Router } from 'express'
import { RoleAlumnoController } from '../controllers/RoleAlumno.controller'
import { RoleProfesorController } from '../controllers/RoleProfesor.controller'

export const roleRoutes = Router()

roleRoutes.post('/assign/roleAdmin/:id_user', RoleAdminController.create)
roleRoutes.post('/assign/roleAlumno/:id_user', RoleAlumnoController.create)
roleRoutes.post('/assign/roleProfesor/:id_user', RoleProfesorController.create)
