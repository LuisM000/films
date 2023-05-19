import request from 'supertest'
import { application } from './utils'

describe('Films controller', () => {
  test('should returned all films', async () => {
    const response = await request(application()).get('/api/films/all')

    expect(response.statusCode).toBe(200)
    expect(response.body.length).toBeGreaterThanOrEqual(1)
  })
})


