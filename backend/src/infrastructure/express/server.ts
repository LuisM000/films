import { App } from './app'

const PORT = process.env.PORT || 3000

export class Server {

  constructor(private app: App) {
  }

  public start() {
    this.app.expressApp.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
    })
  }
}