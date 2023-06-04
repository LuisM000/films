import { BasicFilms } from 'common/models/basicFilm'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFilms } from './films.api'
import { linkRoutes } from '@/core/routes'


export interface FilmContainerResult {
  films: BasicFilms;
  handleOnClickFilm: (filmId: string) => void;
  isLoading: boolean,
  isError: boolean
}

const useFilmsContainer = (): FilmContainerResult => {
  const navigate = useNavigate()
  const [films, setFilms] = useState<BasicFilms>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    getFilms()
      .then(films => {
        setIsLoading(false)
        setFilms(films)
      })
      .catch(() => {
        setIsLoading(false)
        setIsError(true)
      })
  }, [])

  const handleOnClickFilm = (filmId: string) => {
    navigate(linkRoutes.film(filmId))
  }

  return {
    films,
    handleOnClickFilm,
    isLoading,
    isError
  }
}

export default useFilmsContainer