import { BasicFilms } from 'common/models/basicFilm'
import React from 'react'
import { FilmCardComponent } from './film-card.component'

interface FilmsComponentProps {
  films: BasicFilms;
  onClick?: (filmId: string) => void
}

export const FilmListComponent: React.FC<FilmsComponentProps> = ({ films, onClick }) => {
  return (
    <div role='list' className='columns-1 md:columns-2 lg:columns-3 gap-x-6 m-6'>
      {
        films.map(film => {
          return (
            <div role='listitem' className='mb-6' key={film.id} onClick={() => onClick && onClick(film.id)}>
              <FilmCardComponent film={film} />
            </div>
          )
        })
      }
    </div >
  )
}