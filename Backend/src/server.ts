import express from 'express'
import { userRoutes } from './modules/Usuarios/infrastructure/routes/user.routes'
import { errorMiddleware } from './shared/middlewares/error.middleware'
import cookieParser from 'cookie-parser'
import { roleRoutes } from './modules/roles/infrastructure/router/Roles.routes'
import { alumnoRoutes } from './modules/Alumnos/infrastructure/routes/Alumno.routes'
import { profesorRoutes } from './modules/Profesor/infrastructure/routes/Profesor.route'
import { materiasRoutes } from './modules/Materias/infrastructure/routers/materias.routes'

export const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api', userRoutes)
app.use('/admin', roleRoutes)
app.use('/api', alumnoRoutes)
app.use('/api', profesorRoutes)
app.use('/api', materiasRoutes)
app.use(errorMiddleware)
