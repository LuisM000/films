export interface RatingConfig<T> {
  filled: T;
  half: T;
  empty: T;
}

export function calculateStars<T>(rating: number, config: RatingConfig<T>): Array<T> {
  const totalStars = 5
  const filledStars = Math.floor(rating)
  const decimalPart = rating - filledStars

  const stars: Array<T> = []

  for (let i = 0; i < filledStars; i++) {
    stars.push(config.filled)
  }

  if (decimalPart >= 0.8) {
    stars.push(config.filled)
  } else if (decimalPart >= 0.2) {
    stars.push(config.half)
  }

  const emptyStars = totalStars - stars.length

  for (let i = 0; i < emptyStars; i++) {
    stars.push(config.empty)
  }

  return stars
}
