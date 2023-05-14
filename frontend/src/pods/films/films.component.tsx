import React from 'react'
import { Film } from './film.model'

interface FilmsProps {
  films: Film[];
  onClick?: (film: Film) => void
}


export const Films: React.FC<FilmsProps> = ({ films, onClick }) => {

  return (
    <ul>
      {
        films.map(film => {
          return (
            <li key={film.id} onClick={() => onClick && onClick(film)}>
              <div>
                <h2>{film.title}</h2>
                <small>{film.originalTitle}</small>
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
