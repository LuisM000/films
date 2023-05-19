import express, { Application } from 'express'
import { loadControllers, scopePerRequest } from 'awilix-express'
import { Container } from '@/shared/infrastructure/container'
import path from 'path'

export class App {
  public readonly expressApp: Application

  constructor(container: Container) {
    this.expressApp = express()
      .use(express.json())
      .use(scopePerRequest(container.invoke()))
      .use(loadControllers(`controllers/*${path.extname(__filename)}`, { cwd: __dirname }))
  }
}
