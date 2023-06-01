import LoadingComponent from '@/common/components/loading.component'
import FilmsComponent from './films.component'
import useFilmsContainer from './films.container.hook'

const FilmsContainer: React.FC = () => {
  const { films, handleOnClickFilm, isLoading } = useFilmsContainer()

  if (isLoading) {
    return <LoadingComponent />
  }

  return <FilmsComponent films={films} onClick={handleOnClickFilm} />
}

export default FilmsContainer
