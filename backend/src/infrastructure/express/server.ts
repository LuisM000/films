import { Container } from '@/shared/infrastructure/container'
import { loadControllers, scopePerRequest } from 'awilix-express'
import express from 'express'

export class Server {

  constructor(private container: Container) {
  }

  public start() {
    const port = process.env.PORT || 3000

    const app = express()
      .use(express.json())
      .use(scopePerRequest(this.container.invoke()))
      .use(loadControllers('controllers/*.ts', { cwd: __dirname }))

    app.get('/api/other-films/all', (_req, res) => {
      res.send('Hello World!' + __dirname)
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  }
}