import express from 'express'
import { userRoutes } from './modules/Usuarios/infrastructure/routes/user.routes'
import { errorMiddleware } from './shared/middlewares/error.middleware'
import cookieParser from 'cookie-parser'

export const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api', userRoutes)
app.use(errorMiddleware)
