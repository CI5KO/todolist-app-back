import { Sequelize } from 'sequelize'

const userSequelize = new Sequelize(process.env.USER_DATABASE_URL as string, {
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
