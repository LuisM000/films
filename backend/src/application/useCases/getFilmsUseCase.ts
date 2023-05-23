import { FilmQueries } from '../queries/filmQueries'
import { BasicFilms } from 'common/models/basicFilm'


export class GetFilmsUseCase {
  constructor(private filmQueries: FilmQueries) { }

  async invoke(): Promise<BasicFilms> {
    return await this.filmQueries.all()
  }
}