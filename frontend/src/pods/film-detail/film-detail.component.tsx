import { useParams } from 'react-router-dom'

const FilmDetailComponent: React.FC = () => {
  const { id } = useParams()

  return (
    <div>
      {id}
    </div>
  )
}


export default FilmDetailComponent