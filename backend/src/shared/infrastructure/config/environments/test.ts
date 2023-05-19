import { Configuration } from '..'

const TEST: Configuration = {
  NODE_ENV: 'test',
  PORT: +(process.env.PORT || 3000)
}

export default TEST