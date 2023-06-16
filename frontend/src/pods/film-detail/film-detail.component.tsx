import { useParams } from 'react-router-dom'

export const FilmDetailComponent: React.FC = () => {
  const { id } = useParams()

  return (
    <div>
      {id}
    </div>
  )
}