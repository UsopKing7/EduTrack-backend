import { Request, Response, NextFunction } from 'express'
import { RoleAdminUseCase } from '@/modules/roles/application/use-case/RoleAdmin.use-case' 
import { RoleAdminPrisma } from '@/modules/roles/infrastructure/prisma/RoleAdminPrisma'
import { RequestError } from '@/core/errors/requestError'

const repo = new RoleAdminPrisma()
const usecase = new RoleAdminUseCase(repo)

export const requiresUserRol = (allowedRoles: string[]) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    const id_user = req.user.id_user
    if (!id_user) throw new RequestError(400, 'User ID is required')

    const user = await usecase.findByRole(id_user, 'ADMIN')
    if (!user) throw new RequestError(401, 'Not authorized')

    if (!allowedRoles.includes(user.getRol())) throw new RequestError(403, 'Not authorized')

    next()
  }
} 
