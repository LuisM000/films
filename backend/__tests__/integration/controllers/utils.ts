import { Application } from 'express'
import { Container } from '../../../src/shared/infrastructure/container'
import { App } from '../../../src/infrastructure/express/app'

export const application = (): Application => {
  const container = new Container()
  const app = container.invoke().resolve<App>('app')
  return app.expressApp
}