import FilmListComponent from './film-list.component'
import useFilmListContainer from './film-list.container.hook'
import { ErrorComponent, LoadingComponent } from '@/common/components'

export const FilmListContainer: React.FC = () => {
  const { films, handleOnClickFilm, isLoading, isError } = useFilmListContainer()

  if (isError) {
    return <ErrorComponent />
  }

  if (isLoading) {
    return <LoadingComponent />
  }

  return <FilmListComponent films={films} onClick={handleOnClickFilm} />
}

export default FilmListContainer
