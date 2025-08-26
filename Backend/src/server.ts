import express from 'express'
import { userRoutes } from './modules/Usuarios/infrastructure/routes/user.routes'
import { errorMiddleware } from './shared/middlewares/error.middleware'

export const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', userRoutes)
app.use(errorMiddleware)
