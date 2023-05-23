import { Configuration } from '..'

const TEST: Configuration = {
  NODE_ENV: 'test',
  PORT: +(process.env.PORT || 3000),
  DATABASE_URL: process.env.DATABASE_URL || ''
}

export default TEST