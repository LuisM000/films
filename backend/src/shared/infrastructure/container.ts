import { FilmsController } from '../../infrastructure/express/controllers/films.controller'
import { FilmService } from '../../application/filmService'
import { AwilixContainer, InjectionMode, asClass, asValue, createContainer } from 'awilix'
import { Server } from '../../infrastructure/express/server'
import { App } from '../../infrastructure/express/app'
import { config } from './config'
import { ServerLogger } from '../../infrastructure/logger'

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
      logger: asClass(ServerLogger).singleton(),
      filmService: asClass(FilmService).scoped(),
      filmController: asClass(FilmsController).scoped()
    })
  }
}





