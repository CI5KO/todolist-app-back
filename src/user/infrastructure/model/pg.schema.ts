import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  logging: false,
})

class UserModel extends Model {}

UserModel.init(
  {
    uuid: {
      type: DataTypes.TEXT,
      unique: true,
      primaryKey: true,
    },
    name: DataTypes.TEXT,
    email: {
      type: DataTypes.TEXT,
      unique: true,
    },
    password: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: 'users',
    timestamps: false,
  }
)

UserModel.sync({ force: false, match: /_development%/ })

export default UserModel
