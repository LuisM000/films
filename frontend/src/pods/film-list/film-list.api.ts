import { apiRoutes } from '@/common-app/api-configuration/api.constants'
import { BasicFilms } from 'common/models/basicFilm'
import { get } from '@/common-app/api-configuration/api'

export const getFilms = (): Promise<BasicFilms> => {
  return get<BasicFilms>(apiRoutes.films.list)
}