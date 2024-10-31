import 'dotenv/config'
import { Sequelize } from 'sequelize'

const DATABASE_URL: string =
  process.env.USER_DATABASE_URL || 'https://localhost:5432/user'

const userSequelize = new Sequelize(DATABASE_URL, {
  logging: false
})

export async function isUserDBConnected(): Promise<boolean> {
  try {
    await userSequelize.authenticate()
    return true
  } catch (error) {
    console.error('Unable to connect to the user database:', error)
    return false
  }
}

export default userSequelize
