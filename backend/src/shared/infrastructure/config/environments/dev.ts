import { Configuration } from '..'

const DEV: Configuration = {
  NODE_ENV: 'development',
  PORT: +(process.env.PORT || 3000)
}

export default DEV