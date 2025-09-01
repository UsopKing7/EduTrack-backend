import { RoleAdminController } from '../controllers/RoleAdmin.controller'
import { Router } from 'express'

export const roleRoutes = Router()

roleRoutes.post('/roleAdmin/:id_user', RoleAdminController.create)
