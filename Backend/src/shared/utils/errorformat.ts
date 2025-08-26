export const errorFormat = (error: unknown) =>
  error instanceof Error ? error.message : String(error)