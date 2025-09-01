export class RequestError extends Error {
  public readonly status: number
  constructor (status: number, message: string) {
    super(message)
    this.name = 'RequestError'
    this.status = status
  }
}