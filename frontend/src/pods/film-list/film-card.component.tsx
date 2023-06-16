import { RatingComponent, TagsComponent } from '@/common/components'
import { BasicFilm } from 'common/models/basicFilm'
import noImage from '@/images/no-image.jpeg'

interface FilmCardComponentProps {
  film: BasicFilm;
}

const FilmCardComponent: React.FC<FilmCardComponentProps> = ({ film }) => {
  const tags: Array<string> = ['⚪⚫ foo', '😱 bar']

  return (
    <article className="bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800">
      <img className="w-full h-80 object-cover" src={film.mainImage || noImage} alt={film.title}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = noImage
        }} />
      <div className='flex items-center gap-8 m-2'>
        <span className='text-slate-700'>🎬 Película</span>
        <RatingComponent rating={film.rating} />
      </div>
      <h2 className='text-2xl font-semibold text-slate-900 m-2'>{film.title}</h2>
      {film.esTitle && <small className='text-slate-700 m-2'>{film.esTitle}</small>}
      <TagsComponent tags={tags} />
    </article>
  )
}

export default FilmCardComponent