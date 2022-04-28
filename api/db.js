import { Sequelize } from "sequelize"
import redis from "ioredis"
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
export const client = redis.createClient({
  host: "localhost",
  port: `${DB_PORT}`
})

const sequelize = await new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`, {
  logging: true,
}
)
export { sequelize };