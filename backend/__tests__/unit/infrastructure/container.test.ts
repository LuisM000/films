import { Server } from '../../../src/infrastructure/express/server'
import { Container } from '../../../src/shared/infrastructure/container'

const container = new Container()

describe('Container', () => {
  it('should resolve an instaciated container server object', () => {
    const server = container.invoke().resolve<Server>('server')
    expect(server).not.toBeNull()
    expect(server).not.toBeUndefined()
  })
})