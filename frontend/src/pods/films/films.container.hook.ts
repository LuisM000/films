import { BasicFilms } from 'common/models/basicFilm'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFilms } from './films.api'
import { linkRoutes } from '@/core/routes'


export interface FilmContainerResult {
  films: BasicFilms;
  handleOnClickFilm: (filmId: string) => void;
  isLoading: boolean
}

const useFilmsContainer = (): FilmContainerResult => {
  const navigate = useNavigate()
  const [films, setFilms] = useState<BasicFilms>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    getFilms()
      .then().then(films => {
        setIsLoading(false)
        setFilms(films)
      })
  }, [])

  const handleOnClickFilm = (filmId: string) => {
    navigate(linkRoutes.film(filmId))
  }

  return {
    films,
    handleOnClickFilm,
    isLoading
  }
}

export default useFilmsContainer