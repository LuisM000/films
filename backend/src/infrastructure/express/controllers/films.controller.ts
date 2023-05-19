import { route, GET } from 'awilix-router-core'
import { FilmService } from '@/application/filmService'
import { Request, Response } from 'express'

@route('/api/films')
export class FilmsController {

  constructor(private filmService: FilmService) {
  }

  @route('/all')
  @GET()
  getAllFilms(_request: Request, response: Response) {
    response
      .status(200)
      .send(this.filmService.getAll())
  }
}
