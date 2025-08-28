import { RepositoryLogin } from '@/core/interfaces/User.interface'
import { Login } from '@/modules/Usuarios/domain/entities/Login'

export interface ILoginRepository extends RepositoryLogin<Login | null>{
  findByEmail(email: string): Promise<Login | null>
}
