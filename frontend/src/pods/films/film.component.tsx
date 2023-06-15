import { useParams } from 'react-router-dom'

const FilmComponent: React.FC = () => {
  const { id } = useParams()

  return (
    <div>
      {id}
    </div>
  )
}


export default FilmComponent