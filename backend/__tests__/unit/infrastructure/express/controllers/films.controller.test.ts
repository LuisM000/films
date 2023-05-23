import { FilmsController } from '../../../../../src/infrastructure/express/controllers/filmsController'
import { GetFilmsUseCase } from '../../../../../src/application/useCases/getFilmsUseCase'
import { BasicFilm } from 'common/models/basicFilm'
import { request } from 'express'
import { mockResponse } from './utils'
import { FilmQueries } from '../../../../../src/application/queries/filmQueries'

describe('Films Controller', () => {
  it('should get all films successfully', async () => {
    const allFilms: Array<BasicFilm> = [{
      id: '1',
      title: 'Mocked Film 1',
      esTitle: 'Película Mockeada 1',
      rating: 9.9,
      mainImage: 'https://example.com/mock-film1.jpg'
    }]

    const mockFilmQueries: FilmQueries = {
      all: jest.fn().mockResolvedValue(allFilms)
    }

    const getFilmsUseCase: GetFilmsUseCase = new GetFilmsUseCase(mockFilmQueries)

    const req = request
    const res = mockResponse()
    const filmsController = new FilmsController(getFilmsUseCase)

    await filmsController.getAllFilms(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(allFilms)
    expect(mockFilmQueries.all).toHaveBeenCalled()
  })
})