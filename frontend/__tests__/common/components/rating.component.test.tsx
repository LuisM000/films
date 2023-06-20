import { render, screen } from '@testing-library/react'
import React from 'react'
import { RatingComponent } from '../../../src/common/components/rating/rating.component'
import { describe, test, expect } from 'vitest'

describe('Rating Component', () => {
  test('renders component with 3.5 stars', () => {
    render(<RatingComponent rating={3.5} />)

    const filledStars = screen.getAllByTestId('star-filled')
    const halfStars = screen.getAllByTestId('star-half')
    const emptyStars = screen.getAllByTestId('star-empty')

    expect(filledStars.length).toEqual(3)
    expect(halfStars.length).toEqual(1)
    expect(emptyStars.length).toEqual(1)
  })

  test('renders component with 3.5 stars in order', () => {
    render(<RatingComponent rating={3.5} />)

    const tagElements = screen.getAllByTestId(/star-filled|star-empty|star-half/i)

    expect(tagElements[0]).toHaveAttribute('data-testid', 'star-filled')
    expect(tagElements[1]).toHaveAttribute('data-testid', 'star-filled')
    expect(tagElements[2]).toHaveAttribute('data-testid', 'star-filled')
    expect(tagElements[3]).toHaveAttribute('data-testid', 'star-half')
    expect(tagElements[4]).toHaveAttribute('data-testid', 'star-empty')
  })
})