import { PrismaClient } from '@prisma/client'
import { Configuration } from '../config'

export function createPrismaClient(config: Configuration): PrismaClient {
  console.log({ config })
  console.log('db ' + config.DATABASE_URL)
  return new PrismaClient({
    datasources: {
      db: {
        url: config.DATABASE_URL
      },
    },
  })
}