import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { FilmListComponent } from '../../../src/pods/film-list/film-list.component'
import { describe, test, expect, vi } from 'vitest'
import { givenABasicFilm, givenABasicFilms } from '../../utils/testData'

describe('Film List Component', () => {
  test('renders component with films', () => {
    const films = givenABasicFilms()
    const emptyOnClick = () => ({})

    render(<FilmListComponent films={films} onClick={emptyOnClick} />)

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

    render(<FilmListComponent films={[film]} onClick={mockOnClick} />)
    const listElement = screen.getAllByRole('listitem')[0]

    fireEvent.click(listElement)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
    expect(mockOnClick).toHaveBeenCalledWith(film.id)
  })
})