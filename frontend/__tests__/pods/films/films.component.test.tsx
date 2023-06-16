import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import FilmsComponent from '../../../src/pods/film-list/film-list.component'
import { describe, test, expect, vi } from 'vitest'
import { givenABasicFilm, givenABasicFilms } from '../../utils/testData'

describe('Films Component', () => {
  test('renders component with films', () => {
    const films = givenABasicFilms()
    const emptyOnClick = () => ({})

    render(<FilmsComponent films={films} onClick={emptyOnClick} />)

    films.forEach(film => {
      screen.getByText(film.title)
      screen.getByText(film.esTitle)
      const image = screen.getByAltText(film.title) as HTMLImageElement
      expect(image.src).toBe(film.mainImage)
      screen.getByTitle(film.rating)
    })
  })

  test('clicking calls event handler once', () => {
    const film = givenABasicFilm()
    const mockOnClick = vi.fn()

    render(<FilmsComponent films={[film]} onClick={mockOnClick} />)
    const listElement = screen.getAllByRole('listitem')[0]

    fireEvent.click(listElement)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
    expect(mockOnClick).toHaveBeenCalledWith(film.id)
  })
})