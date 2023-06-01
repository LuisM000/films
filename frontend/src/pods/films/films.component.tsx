import { BasicFilms } from 'common/models/basicFilm'
import React from 'react'

interface FilmsComponentProps {
  films: BasicFilms;
  onClick?: (filmId: string) => void
}

const FilmsComponent: React.FC<FilmsComponentProps> = ({ films, onClick }) => {
  return (
    <ul>
      {
        films.map(film => {
          return (
            <li key={film.id} onClick={() => onClick && onClick(film.id)}>
              <div>
                <h2>{film.title}</h2>
                <small>{film.esTitle}</small>
                <img src={film.mainImage} alt={film.title} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <small>{film.rating}</small>
              </div>
            </li>
          )
        })
      }
    </ul >
  )
}

export default FilmsComponent
