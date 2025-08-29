export interface RequestUser {
  id_user: string
  email: string
}

declare global {
  namespace Express {
    interface Request {
      user?: RequestUser
    }
  }
}
