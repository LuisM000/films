import { Configuration } from '..'

const DEV: Configuration = {
  NODE_ENV: 'development',
  PORT: +(process.env.PORT || 3000),
  DATABASE_URL: process.env.DATABASE_URL || ''
}

export default DEV