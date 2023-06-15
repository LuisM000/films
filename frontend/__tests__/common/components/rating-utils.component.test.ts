import { describe, test } from 'vitest'
import { calculateStars } from '../../../src/common/components/rating-utils.component'

describe('Rating Utils Component', () => {

  test.each([
    [0, ['empty', 'empty', 'empty', 'empty', 'empty']],
    [0.1, ['empty', 'empty', 'empty', 'empty', 'empty']],
    [0.2, ['half', 'empty', 'empty', 'empty', 'empty']],
    [0.3, ['half', 'empty', 'empty', 'empty', 'empty']],
    [0.4, ['half', 'empty', 'empty', 'empty', 'empty']],
    [0.5, ['half', 'empty', 'empty', 'empty', 'empty']],
    [0.6, ['half', 'empty', 'empty', 'empty', 'empty']],
    [0.7, ['half', 'empty', 'empty', 'empty', 'empty']],
    [0.8, ['filled', 'empty', 'empty', 'empty', 'empty']],
    [0.9, ['filled', 'empty', 'empty', 'empty', 'empty']],
    [1, ['filled', 'empty', 'empty', 'empty', 'empty']],
    [2.3, ['filled', 'filled', 'half', 'empty', 'empty']],
    [4.7, ['filled', 'filled', 'filled', 'filled', 'half']],
    [5, ['filled', 'filled', 'filled', 'filled', 'filled']],
  ])('should generate starts for a %d value', (rating, expected) => {
    const ratingConfig = {
      filled: 'filled',
      half: 'half',
      empty: 'empty'
    }

    const stars = calculateStars(rating, ratingConfig)

    expect(stars).toEqual(expected)
  })
})