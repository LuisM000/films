import { Configuration } from '..'

const PRO: Configuration = {
  NODE_ENV: process.env.NODE_ENV || 'production',
  PORT: +(process.env.PORT || 3000),
  DATABASE_URL: process.env.DATABASE_URL || ''
}

export default PRO