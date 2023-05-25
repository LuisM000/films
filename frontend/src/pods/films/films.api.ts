import { apiRoutes } from '@/common-app/api-configuration/api.constants'
import axios from 'axios'
import { BasicFilms } from 'common/models/basicFilm'

export const getFilms = async (): Promise<BasicFilms> => {
  const { data } = await axios.get<BasicFilms>(apiRoutes.films.list)
  return data
}