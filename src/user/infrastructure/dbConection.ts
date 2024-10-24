import 'dotenv/config'
import { Sequelize } from 'sequelize'

const DATABASE_URL = process.env.USER_DATABASE_URL

const userSequelize = new Sequelize(DATABASE_URL as string, {
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
