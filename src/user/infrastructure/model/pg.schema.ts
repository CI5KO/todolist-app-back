import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize(process.env.DATABASE_URL as string)

class UserModel extends Model {}

UserModel.init(
  {
    uuid: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'users',
    timestamps: true,
  }
)

export default UserModel
