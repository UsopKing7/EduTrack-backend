import { redis } from "../config/redis"
import { errorFormat } from "./errorformat"

export const verificache = (cache: any | null): any | null => {
  if (!cache) return null

  try {
    return JSON.parse(cache)
  } catch (error) {
    return errorFormat(error)
  }
}

export const saveCache = (data: any) => {
  return {
    value: JSON.stringify(data),
    expire: { EX: 60 }
  }
}

export const deleteCache = (data: any) => {
  return redis.del(data)
}