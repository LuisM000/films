import { Configuration } from '../../shared/infrastructure/config'
import { ServerLogger } from '../logger'
import { App } from './app'

export class Server {

  PORT = process.env.PORT || 3000

  constructor(private app: App, private config: Configuration, private logger: ServerLogger) {
  }

  public start() {
    this.app.expressApp.listen(this.PORT, () => {
      this.logger.info(`server is running on port ${this.config.PORT}. Environment ${this.config.NODE_ENV}`)
    })
  }
}