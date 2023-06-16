import { apiRoutes, get } from '@/common-app/api-configuration'
import { BasicFilms } from 'common/models/basicFilm'

export const getFilms = (): Promise<BasicFilms> => {
  return get<BasicFilms>(apiRoutes.films.list)
}