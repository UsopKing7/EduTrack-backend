export const errorFormat = (error: unknown) =>
  error instanceof Error 
    ? error.message || error.stack || error.name || error.cause
    : String(error)
