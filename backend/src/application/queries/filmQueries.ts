import { BasicFilms } from 'common/models/basicFilm'

export interface FilmQueries {
  all(): Promise<BasicFilms>;
}