import { Container } from '../../../src/shared/infrastructure/container'
import { PrismaFilmQueries } from '../../../src/infrastructure/queries/prismaFilmQueries'

export const prismaFilmQueries = (): PrismaFilmQueries => {
  const container = new Container()
  return container.invoke().resolve<PrismaFilmQueries>('filmQueries')
}
