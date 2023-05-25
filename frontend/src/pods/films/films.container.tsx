import React, { useEffect, useState } from 'react'
import { Films } from './films.component'
import { linkRoutes } from '@/core/routes'
import { useNavigate } from 'react-router-dom'
import { getFilms } from './films.api'
import { BasicFilm, BasicFilms } from 'common/models/basicFilm'

export const FilmsContainer: React.FC = () => {
  const navigate = useNavigate()
  const [films, setFilms] = useState<BasicFilms>([])

  useEffect(() => {
    getFilms().then(setFilms)
  }, [])

  const handleOnClickFilm = (film: BasicFilm) => {
    navigate(linkRoutes.film(film.id))
  }
  return <Films films={films} onClick={handleOnClickFilm} />
}
