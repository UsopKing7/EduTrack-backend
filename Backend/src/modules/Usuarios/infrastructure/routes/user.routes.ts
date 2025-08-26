import { UserController } from '../controllers/User.controller'
import { Router } from 'express'

export const userRoutes = Router()

userRoutes.post('/register', UserController.create)
