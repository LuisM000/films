
import express from 'express'

export class Server {


  public start() {
    const app = express()
    const port = process.env.PORT || 3000

    app.get('/api/films/all', (_req, res) => {
      res.send('Hello World!!')
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  }
}