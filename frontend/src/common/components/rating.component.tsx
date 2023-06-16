import React from 'react'
import { calculateStars, RatingConfig } from './rating-utils.component'

interface RatingComponentProps {
  rating: number
}

const ratingConfig: RatingConfig<JSX.Element> =
{
  empty: (
    <svg className="fill-slate-300 w-6 h-6" viewBox="0 0 24 24">
      <path d="M12 1.054l2.705 8.309h8.776l-7.095 5.17 2.73 8.41-7.116-5.196-7.116 5.196 2.73-8.41-7.095-5.17h8.776z" />
    </svg>
  ),
  half: (
    <svg className="fill-slate-300 w-6 h-6" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="grad">
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="50%" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>
      <path fill="url(#grad)" d="M12 1.054l2.705 8.309h8.776l-7.095 5.17 2.73 8.41-7.116-5.196-7.116 5.196 2.73-8.41-7.095-5.17h8.776z" />
    </svg>
  ),
  filled: (
    <svg className="fill-yellow-400 w-6 h-6" viewBox="0 0 24 24">
      <path d="M12 1.054l2.705 8.309h8.776l-7.095 5.17 2.73 8.41-7.116-5.196-7.116 5.196 2.73-8.41-7.095-5.17h8.776z" />
    </svg>
  )
}

export const RatingComponent: React.FC<RatingComponentProps> = ({ rating }) => {
  const stars = calculateStars(rating, ratingConfig)

  return (
    <div className='flex flex-row flex-wrap gap-0.5' title={rating.toString()}>
      {stars.map((star, index) => (
        <div key={index}>{star}</div>
      ))}
    </div>
  )
}

export default RatingComponent