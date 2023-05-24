import { route, GET } from 'awilix-router-core'
import { Request, Response } from 'express'
import { GetFilmsUseCase } from '../../../application/useCases/getFilmsUseCase'

@route('/api/films')
export class FilmsController {

  constructor(private getFilmsUseCase: GetFilmsUseCase) {
  }

  @route('/all')
  @GET()
  async getAllFilms(_request: Request, response: Response) {
    response
      .status(200)
      .send(await this.getFilmsUseCase.invoke())
  }
}
