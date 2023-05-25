import { BasicFilm, BasicFilms } from 'common/models/basicFilm'
import React from 'react'

interface FilmsComponentProps {
  films: BasicFilms;
  onClick?: (film: BasicFilm) => void
}

export const FilmsComponent: React.FC<FilmsComponentProps> = ({ films, onClick }) => {
  return (
    <ul>
      {
        films.map(film => {
          return (
            <li key={film.id} onClick={() => onClick && onClick(film)}>
              <div>
                <h2>{film.title}</h2>
                <small>{film.title}</small>
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
