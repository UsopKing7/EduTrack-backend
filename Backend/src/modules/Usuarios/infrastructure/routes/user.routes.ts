import { LoginController } from '../controllers/Login.controller'
import { UserController } from '../controllers/User.controller'
import { Router } from 'express'

export const userRoutes = Router()

userRoutes.post('/register', UserController.create)
userRoutes.post('/login', LoginController.login)
