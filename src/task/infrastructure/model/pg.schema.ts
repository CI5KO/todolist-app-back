import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  logging: false,
})

class TaskModel extends Model {}

TaskModel.init(
  {
    uuid: {
      type: DataTypes.TEXT,
      unique: true,
      primaryKey: true,
    },
    userId: DataTypes.TEXT,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    status: DataTypes.INTEGER,
    priority: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: 'tasks',
    timestamps: false,
  }
)

TaskModel.sync({ force: false, match: /_development%/ })

export default TaskModel
