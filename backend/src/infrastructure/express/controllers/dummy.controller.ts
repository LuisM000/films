import { route, GET } from 'awilix-router-core'
import { Request, Response } from 'express'

@route('/api/dummy')
export class DummyController {

  @route('/all')
  @GET()
  getAllFilms(_request: Request, response: Response) {
    response
      .status(200)
      .send('ook')
  }
}
