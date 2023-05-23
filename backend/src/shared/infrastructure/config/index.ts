import * as dotenv from 'dotenv'
import path from 'path'
const { NODE_ENV } = process.env

dotenv.config({
  path: NODE_ENV === 'test'
    ? path.resolve(process.cwd(), '.env.test')
    : path.resolve(process.cwd(), '.env')
})

import PRODUCTION from './environments/pro'
import DEVELOPMENT from './environments/dev'
import TEST from './environments/test'

export type Configuration = {
  NODE_ENV: string
  PORT: number
  DATABASE_URL: string
};

let currentConfig: Configuration = DEVELOPMENT

switch (NODE_ENV) {
  case 'production':
    currentConfig = PRODUCTION
    break
  case 'test':
    currentConfig = TEST
    break
  default:
    currentConfig = DEVELOPMENT
}

export { currentConfig as config }