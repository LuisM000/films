/* import { Server } from './infrastructure/express/server'
import { Container } from './shared/infrastructure/container'

const container = new Container()
const server = container.invoke().resolve<Server>('server')

server.start() */

import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/api/films/all', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})