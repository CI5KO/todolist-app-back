import { connect } from 'mongoose'

const dbInit = async () => await connect(process.env.MONGO_URI as string)

export default dbInit
