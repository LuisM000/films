import { Configuration } from '../../shared/infrastructure/config'
import { ServerLogger } from '../logger'
import { App } from './app'

const PORT = process.env.PORT || 3000

export class Server {

  constructor(private app: App, private config: Configuration, private logger: ServerLogger) {
  }

  public start() {
    this.app.expressApp.listen(this.config.PORT, () => {
      this.logger.info(`server is running on port ${PORT}. Environment ${this.config.NODE_ENV}`)
    })
  }
}