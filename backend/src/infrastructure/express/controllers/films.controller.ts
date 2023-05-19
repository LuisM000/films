import { route, GET } from 'awilix-router-core'
import { Request, Response } from 'express'

@route('/api/films')
export class FilmsController {

  @route('/all')
  @GET()
  getAllFilms(_request: Request, response: Response) {
    response
      .status(200)
      .send('FIlms')
  }
}
