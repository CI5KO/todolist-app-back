import 'dotenv/config'
import { Pool } from 'pg'

const pool = new Pool({
  user: process.env.POSTGRES_DB_USER,
  host: process.env.POSTGRES_DB_HOST || 'localhost',
  password: process.env.POSTGRES_DB_PASSWORD,
  database: process.env.POSTGRES_DB_DATABASE,
  port: parseInt(process.env.POSTGRES_DB_PORT || '5434', 10),
})

export default pool
