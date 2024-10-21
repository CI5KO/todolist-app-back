import { Sequelize } from 'sequelize'

const taskSequelize = new Sequelize(process.env.TASK_DATABASE_URL as string, {
  logging: false
})

export async function isTaskDBConnected(): Promise<boolean> {
  try {
    await taskSequelize.authenticate()
    return true
  } catch (error) {
    console.error('Unable to connect to the user database:', error)
    return false
  }
}

export default taskSequelize
