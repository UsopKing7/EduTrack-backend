export abstract class BaseEntities {
  public readonly createdAt: Date = new Date()
  public updatedAt: Date = new Date()

  constructor() {
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }

  public update() {
    this.updatedAt = new Date()
  }
}