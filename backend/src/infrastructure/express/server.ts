import { Configuration } from '../../shared/infrastructure/config'
import { ServerLogger } from '../logger'
import { App } from './app'

export class Server {

  constructor(private app: App, private config: Configuration, private logger: ServerLogger) {
  }

  public start() {
    this.app.expressApp.listen(this.config.PORT, () => {
      this.logger.info(`server is running on port ${this.config.PORT}. Environment ${this.config.NODE_ENV}`)
      const db = this.config.DATABASE_URL
      const lenght = db.length
      this.logger.info(`server DB ${db} with leng ${lenght}`)
    })
  }
}