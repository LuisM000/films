import express, { Application } from 'express'
import { loadControllers, scopePerRequest } from 'awilix-express'
import path from 'path'
import { Container } from '../../shared/infrastructure/container'
import cors from 'cors'

export class App {
  public readonly expressApp: Application

  constructor(container: Container) {
    this.expressApp = express()
      .use(cors())
      .use(express.json())
      .use(scopePerRequest(container.invoke()))
      .use(loadControllers(`controllers/*${path.extname(__filename)}`, { cwd: __dirname }))
  }
}
