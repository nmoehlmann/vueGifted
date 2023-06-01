export class Gift {
  constructor(data) {
    this.createdAt = data.createdAt
    this.creatorId = data.creatorId
    this.id = data.id
    this.opened = data.opened
    this.tag = data.tag
    this.url = data.url
    this.updatedAt = data.updatedAt
  }
}