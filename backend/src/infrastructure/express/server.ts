import { loadControllers } from 'awilix-express'
import express from 'express'

export class Server {


  public start() {
    const port = process.env.PORT || 3000

    const app = express()
      .use(express.json())
      .use(loadControllers('controllers/*.ts', { cwd: __dirname }))

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  }
}