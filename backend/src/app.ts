import express from 'express'
import { createContainer, asClass, InjectionMode, AwilixContainer } from 'awilix'
import { scopePerRequest } from 'awilix-express'
import { FilmController } from './controllers/film.controller'
import { FilmService } from './services/filmService'
import { filmRouter } from './controllers/film.router'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      container: AwilixContainer<ICradle>;
    }
  }
}


//ToDo: review this
interface ICradle {
  filmController: FilmController,
  filmService: FilmService
}
const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
})

container.register({
  filmService: asClass(FilmService).scoped(),
  filmController: asClass(FilmController).scoped()
})

export const app = express()
  .use(express.json())
  .use(scopePerRequest(container))

app.use('/api/film', filmRouter)
