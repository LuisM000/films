import { FilmsController } from '../../../../../src/infrastructure/express/controllers/filmsController'
import { GetFilmsUseCase } from '../../../../../src/application/useCases/getFilmsUseCase'
import { BasicFilm } from 'common/models/basicFilm'
import { request } from 'express'
import { mockResponse } from './utils'
import { mock } from 'jest-mock-extended'

describe('Films Controller', () => {
  it('should get all films successfully', async () => {
    const allFilms: Array<BasicFilm> = [{
      id: '1',
      title: 'Mocked Film 1',
      esTitle: 'Película Mockeada 1',
      rating: 9.9,
      mainImage: 'https://example.com/mock-film1.jpg',
      tags: ['foo', 'bar']
    }]
    const mockGetFilmsUseCase = mock<GetFilmsUseCase>()
    mockGetFilmsUseCase.invoke.mockResolvedValue(allFilms)
    const req = request
    const res = mockResponse()
    const filmsController = new FilmsController(mockGetFilmsUseCase)

    await filmsController.getAllFilms(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(allFilms)
    expect(mockGetFilmsUseCase.invoke).toHaveBeenCalledOnce()
  })
})