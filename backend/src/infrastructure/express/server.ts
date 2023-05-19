import { Container } from '@/shared/infrastructure/container'
import { loadControllers, scopePerRequest } from 'awilix-express'
import express from 'express'
//import path from 'path'

export class Server {

  constructor(private container: Container) {
  }

  public start() {
    const port = process.env.PORT || 3000

    const app = express()
      .use(express.json())
      .use(scopePerRequest(this.container.invoke()))
      .use(loadControllers('src/infrastructure/express/controllers/*.ts'))

    //const configFilePath = path.join(__dirname, 'config', 'app.config.js')
    //const controllersPath = path.join(path.dirname(configFilePath), 'controllers')
    //app.use(loadControllers(`${controllersPath}/*.ts`))

    app.get('/api/other-films/all', (_req, res) => {
      res.send('Hello World!' + __dirname)
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  }
}