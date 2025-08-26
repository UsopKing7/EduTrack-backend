import { PrismaClient } from '@prisma/client'
import { errorFormat } from '../utils/errorformat'

export const prisma = new PrismaClient()

export const checkConnection = async () => {
  try {
    await prisma.$connect()
    console.log('[OK][PRISMA] Database connected')
  } catch (error) {
    const err = errorFormat(error)
    console.log(`[ERROR][PRISMA] ${err}`)
  }
}

process.on('SIGINT', async () => {
  try {
    await prisma.$disconnect()
    console.log('[OK][PRISMA] Database disconnected')
  } catch (error) {
    const err = errorFormat(error)
    console.log(`[ERROR][PRISMA] ${err}`)
  }
})
