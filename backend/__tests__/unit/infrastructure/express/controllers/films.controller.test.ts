import { FilmsController } from '../../../../../src/infrastructure/express/controllers/films.controller'
import { FilmService } from '../../../../../src/application/filmService'
import { BasicFilm } from 'common/models/basicFilm'
import { request } from 'express'
import { mockResponse } from './utils'

describe('Films Controller', () => {
  it('should get all films successfully', () => {
    const allFilms: Array<BasicFilm> = [{
      id: '1',
      title: 'Mocked Film 1',
      esTitle: 'Película Mockeada 1',
      rating: 9.9,
      mainImage: 'https://example.com/mock-film1.jpg'
    }]

    const mockFilmService: FilmService = {
      getAll: jest.fn().mockReturnValue(allFilms)
    }
    const req = request
    const res = mockResponse()
    const filmsController = new FilmsController(mockFilmService)

    filmsController.getAllFilms(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(allFilms)
    expect(mockFilmService.getAll).toHaveBeenCalled()
  })
})