import { v4 as uuid } from 'uuid'
import { TaskEntity } from './task.entity'

export class TaskValue implements TaskEntity {
  uuid: string
  userId: string
  title: string
  description: string
  status: number
  priority: number

  constructor({
    userId,
    title,
    description,
    status,
    priority,
  }: {
    userId: string
    title: string
    description: string
    status: number
    priority: number
  }) {
    this.uuid = uuid()
    this.userId = userId
    this.title = title
    this.description = description
    this.status = status
    this.priority = priority
  }
}
