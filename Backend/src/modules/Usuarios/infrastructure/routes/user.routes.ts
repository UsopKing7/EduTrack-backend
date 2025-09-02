import { rutaProtected } from '@/shared/middlewares/rutaProtected'
import { LoginController } from '../controllers/Login.controller'
import { UserController } from '../controllers/User.controller'
import { Router } from 'express'
import { requiresUserRol } from '@/shared/middlewares/admin.middleware'

export const userRoutes = Router()

userRoutes.post('/register', UserController.create)
userRoutes.post('/login', LoginController.login)
userRoutes.get('/users', rutaProtected, requiresUserRol(['ADMIN']), UserController.findAll)
