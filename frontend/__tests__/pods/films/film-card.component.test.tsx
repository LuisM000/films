import { render, screen } from '@testing-library/react'
import React from 'react'
import { FilmCardComponent } from '../../../src/pods/film-list/film-card.component'
import { describe, test, expect } from 'vitest'
import { givenABasicFilm } from '../../utils/testData'

describe('Film Card Component', () => {
  test('renders component with films', () => {
    const film = givenABasicFilm()

    render(<FilmCardComponent film={film} />)

    screen.getByText(film.title)
    screen.getByText(film.esTitle)
    const image = screen.getByAltText(film.title) as HTMLImageElement
    expect(image.src).toBe(film.mainImage)
    screen.getByTitle(film.rating)
    film.tags.forEach(tag => {
      screen.getByText(tag)
    })
  })

  test('renders component with a default image when image is empty', () => {
    const filmWithoutImage = givenABasicFilm()
    filmWithoutImage.mainImage = ''

    render(<FilmCardComponent film={filmWithoutImage} />)

    const image = screen.getByAltText(filmWithoutImage.title) as HTMLImageElement
    console.log(image.src)
    expect(image.src).toMatch('images/no-image.jpeg')
  })
})