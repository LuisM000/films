import React from 'react'
import { render, screen } from '@testing-library/react'
import FilmsContainer from '../../../src/pods/films/films.container'
import useFilmsContainer from '../../../src/pods/films/films.container.hook'
import { describe, test, expect, vi, MockedFunction } from 'vitest'
import { givenABasicFilms } from '../../utils/testData'

vi.mock('../../../src/pods/films/films.container.hook')
const mockUseFilmsContainer = useFilmsContainer as MockedFunction<typeof useFilmsContainer>

describe('Films Container', () => {
  test('renders component with films', () => {
    const films = givenABasicFilms()

    mockUseFilmsContainer.mockReturnValue({
      films: films,
      handleOnClickFilm: vi.fn(),
      isLoading: false
    })

    render(<FilmsContainer />)

    films.forEach(film => {
      screen.getByText(film.title)
      screen.getByText(film.esTitle)
      const image = screen.getByAltText(film.title) as HTMLImageElement
      expect(image.src).toBe(film.mainImage)
      screen.getByText(film.rating)
    })
  })

  test('should display loading when isLoading', () => {
    mockUseFilmsContainer.mockReturnValue({
      isLoading: true,
      films: [],
      handleOnClickFilm: vi.fn()
    })

    render(<FilmsContainer />)

    expect(screen).toContainLoading()
  })
})