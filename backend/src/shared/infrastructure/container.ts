import { FilmsController } from '../../infrastructure/express/controllers/filmsController'
import { AwilixContainer, InjectionMode, asClass, asFunction, asValue, createContainer } from 'awilix'
import { Server } from '../../infrastructure/express/server'
import { App } from '../../infrastructure/express/app'
import { config } from './config'
import { ServerLogger } from '../../infrastructure/logger'
import { createPrismaClient } from './prisma'
import { GetFilmsUseCase } from '../../application/useCases/getFilmsUseCase'
import { PrismaFilmQueries } from '../../infrastructure/queries/prismaFilmQueries'

export class Container {
  private readonly container: AwilixContainer

  constructor() {
    this.container = createContainer({
      injectionMode: InjectionMode.CLASSIC,
    })
    this.register()
  }

  public invoke(): AwilixContainer {
    return this.container
  }

  private register(): void {
    this.container.register({
      container: asValue(this),
      app: asClass(App).singleton(),
      server: asClass(Server).singleton(),
      config: asValue(config),
      db: asFunction(createPrismaClient).singleton(),
      logger: asClass(ServerLogger).singleton(),
      filmQueries: asClass(PrismaFilmQueries).singleton(),
      getFilmsUseCase: asClass(GetFilmsUseCase).singleton(),
      filmController: asClass(FilmsController).singleton()
    })
  }
}





