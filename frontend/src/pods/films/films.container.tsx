import LoadingComponent from '@/common/components/loading.component'
import FilmsComponent from './films.component'
import useFilmsContainer from './films.container.hook'
import ErrorComponent from '@/common/components/error.component'

const FilmsContainer: React.FC = () => {
  const { films, handleOnClickFilm, isLoading, isError } = useFilmsContainer()

  if (isError) {
    return <ErrorComponent />
  }

  if (isLoading) {
    return <LoadingComponent />
  }

  return <FilmsComponent films={films} onClick={handleOnClickFilm} />
}

export default FilmsContainer
