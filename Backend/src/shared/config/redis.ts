import { createClient } from 'redis'
import { REDIS_URL} from '../config/env'
import { errorFormat } from '../utils/errorformat'

export const redis = createClient({
  url: REDIS_URL
})

redis.on('connect', () => {
  console.log('[OK][REDIS] Database connected')
})

redis.on('error', (error) => {
  const err = errorFormat(error)
  console.log('[ERROR][REDIS] ', err)
})

export const checkConnectionRedis = async () => {
  try {
    await redis.connect()
  } catch {}
}

process.on('SIGINT', async () => {
  try {
    await redis.disconnect()
    console.log('[OK][REDIS] Database disconnected')
    process.exit(0)
  } catch (error) {
    const err = errorFormat(error)
    console.log(`[ERROR][REDIS] ${err}`)
    process.exit(1)
  }
})
