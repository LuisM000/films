import { RatingComponent, TagsComponent } from '@/common/components'
import { BasicFilm } from 'common/models/basicFilm'
import noImage from '@/images/no-image.jpeg'

interface FilmCardComponentProps {
  film: BasicFilm;
}

export const FilmCardComponent: React.FC<FilmCardComponentProps> = ({ film }) => {
  return (
    <article className="bg-darker rounded-xl border-darker overflow-hidden">
      <img className="w-full h-80 object-cover" src={film.mainImage || noImage} alt={film.title}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = noImage
        }} />
      <h2 className='text-2xl font-semibold text-light mx-6 mt-6 mb-2'>{film.title}</h2>
      {film.esTitle && <h3 className='text-light text-sm mx-6'>{film.esTitle}</h3>}
      <hr className="h-px m-4 bg-green-50 border-0" />
      <div className='mx-6 my-4'>
        <RatingComponent rating={film.rating} />
      </div>
      <hr className="h-px m-4 bg-green-50 border-0" />
      <div className='mx-6 my-4'>
        <TagsComponent tags={['🎬 Película', ...film.tags]} />
      </div>
    </article>
  )
}