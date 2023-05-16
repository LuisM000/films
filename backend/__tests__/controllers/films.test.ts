import request from 'supertest'
import { app } from '../../src/app'

describe('get all films', () => {
  test('returned all films', async () => {
    const response = await request(app).get('/api/film/all')

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveLength(17)
  })
})