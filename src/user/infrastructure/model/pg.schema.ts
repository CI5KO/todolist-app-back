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

import sequelize from '../dbConection'
import { Model, DataTypes } from 'sequelize'

class UserModel extends Model {}

UserModel.init(
  {
    uuid: {
      type: DataTypes.TEXT,
      unique: true,
      primaryKey: true
    },
    name: DataTypes.TEXT,
    email: {
      type: DataTypes.TEXT,
      unique: true
    },
    password: DataTypes.TEXT
  },
  {
    sequelize,
    modelName: 'users',
    timestamps: false
  }
)

UserModel.sync({ force: false, match: /_development%/ })

export default UserModel
