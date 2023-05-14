import React, { useEffect, useState } from 'react'
import { Films } from './films.component'
import { Film } from './film.model'
import { linkRoutes } from '@/core/routes'
import { useNavigate } from 'react-router-dom'

const INITIAL_FILMS: Array<Film> = [
  {
    id: '1',
    title: 'The Godfather',
    originalTitle: 'Il Padrino',
    rating: 9.2,
    mainImage: 'https://example.com/the-godfather.jpg'
  },
  {
    id: '2',
    title: 'Pulp Fiction',
    originalTitle: 'Pulp Fiction',
    rating: 8.9,
    mainImage: 'https://example.com/pulp-fiction.jpg'
  },
  {
    id: '3',
    title: 'The Shawshank Redemption',
    originalTitle: 'The Shawshank Redemption',
    rating: 9.3,
    mainImage: 'https://example.com/the-shawshank-redemption.jpg'
  },
  {
    id: '4',
    title: 'The Dark Knight',
    originalTitle: 'The Dark Knight',
    rating: 9.0,
    mainImage: 'https://example.com/the-dark-knight.jpg'
  },
  {
    id: '5',
    title: 'Fight Club',
    originalTitle: 'Fight Club',
    rating: 8.8,
    mainImage: 'https://example.com/fight-club.jpg'
  },
  {
    id: '6',
    title: 'Forrest Gump',
    originalTitle: 'Forrest Gump',
    rating: 8.8,
    mainImage: 'https://example.com/forrest-gump.jpg'
  },
  {
    id: '7',
    title: 'Inception',
    originalTitle: 'Inception',
    rating: 8.7,
    mainImage: 'https://example.com/inception.jpg'
  },
  {
    id: '8',
    title: 'The Matrix',
    originalTitle: 'The Matrix',
    rating: 8.7,
    mainImage: 'https://example.com/the-matrix.jpg'
  },
  {
    id: '9',
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    originalTitle: 'Star Wars: Episode V - The Empire Strikes Back',
    rating: 8.7,
    mainImage: 'https://example.com/star-wars-the-empire-strikes-back.jpg'
  },
  {
    id: '10',
    title: 'Interstellar',
    originalTitle: 'Interstellar',
    rating: 8.6,
    mainImage: 'https://example.com/interstellar.jpg'
  },
  {
    id: '11',
    title: 'The Lord of the Rings: The Return of the King',
    originalTitle: 'The Lord of the Rings: The Return of the King',
    rating: 8.9,
    mainImage: 'https://example.com/the-lord-of-the-rings-the-return-of-the-king.jpg'
  },
  {
    id: '12',
    title: 'For a Few Dollars More',
    originalTitle: 'Per qualche dollaro in più',
    rating: 8.2,
    mainImage: 'https://example.com/for-a-few-dollars-more.jpg'
  },
  {
    id: '13',
    title: 'The Good, the Bad and the Ugly',
    originalTitle: 'Il buono, il brutto, il cattivo',
    rating: 8.8,
    mainImage: 'https://example.com/the-good-the-bad-and-the-ugly.jpg'
  },
  {
    id: '14',
    title: 'Joker',
    originalTitle: 'Joker',
    rating: 8.5,
    mainImage: 'https://example.com/joker.jpg'
  },
  {
    id: '15',
    title: 'Gladiator',
    originalTitle: 'Gladiator',
    rating: 8.5,
    mainImage: 'https://example.com/gladiator.jpg'
  },
  {
    id: '16',
    title: 'Léon: The Professional',
    originalTitle: 'Léon',
    rating: 8.5,
    mainImage: 'https://example.com/leon-the-professional.jpg'
  },
  {
    id: '17',
    title: 'The Usual Suspects',
    originalTitle: 'The Usual Suspects',
    rating: 8.5,
    mainImage: 'https://example.com/the-usual-suspects.jpg'
  }
]
export const FilmsContainer: React.FC = () => {
  const navigate = useNavigate()
  const [films, setFilms] = useState<Array<Film>>([])

  useEffect(() => {
    setFilms(INITIAL_FILMS)
  }, [])

  const handleOnClickFilm = (film: Film) => {
    navigate(linkRoutes.film(film.id))
  }
  return <Films films={films} onClick={handleOnClickFilm} />
}
