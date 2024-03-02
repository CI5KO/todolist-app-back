import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize(process.env.DATABASE_URL as string)

class TaskModel extends Model {}

TaskModel.init(
  {
    uuid: {
      type: DataTypes.STRING,
      unique: true,
    },
    userId: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.INTEGER,
    priority: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: 'tasks',
    timestamps: true,
  }
)

export default TaskModel
