import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    uuid: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const UserModel = model('users', UserSchema)

export default UserModel
