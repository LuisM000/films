import { PrismaClient } from '@prisma/client'
import { Configuration } from '../config'

export function createPrismaClient(config: Configuration): PrismaClient {
  return new PrismaClient({
    datasources: {
      db: {
        url: config.DATABASE_URL
      },
    },
  })
}