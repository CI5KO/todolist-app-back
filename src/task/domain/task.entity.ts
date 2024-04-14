/**
 * Author: CI5KO
 * Creation Date: April 14, 2024
 * Last Modification: April 14, 2024
 *
 * Contact: hector_oliva16k@hotmail.com
 *
 * This code is owned by CI5KO.
 * You are welcome to contribute to the original repository.
 *
 * Any contributions to this repository are subject to the original terms stated herein.
 */

export interface TaskEntity {
  uuid: string
  userId: string
  title: string
  description: string
  status: number
  priority: number
}

export interface TaskRegisterEntiry extends Omit<TaskEntity, 'uuid'> {}
