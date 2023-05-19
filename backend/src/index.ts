import { Server } from './infrastructure/express/server'
import { Container } from './shared/infrastructure/container'

const container = new Container()
const server = container.invoke().resolve<Server>('server')

server.start()