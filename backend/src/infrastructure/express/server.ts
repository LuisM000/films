import { Configuration } from '../../shared/infrastructure/config'
import { ServerLogger } from '../logger'
import { App } from './app'
import * as http from 'http'

export class Server {

  constructor(private app: App, private config: Configuration, private logger: ServerLogger) {
  }

  public start(): http.Server {
    return this.app.expressApp.listen(this.config.PORT, () => {
      this.logger.info(`server is running on port ${this.config.PORT}. Environment ${this.config.NODE_ENV}`)
    })
  }
}