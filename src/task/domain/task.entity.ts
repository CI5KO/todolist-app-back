export interface TaskEntity {
  uuid: string
  userId: string
  title: string
  description: string
  status: number
  priority: number
}

export interface TaskRegisterEntiry extends Omit<TaskEntity, 'uuid'> {}
