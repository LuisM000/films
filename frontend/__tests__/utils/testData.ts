import { BasicFilm, BasicFilms } from 'common/models/basicFilm'

export const givenABasicFilm = (): BasicFilm => {
  return {
    id: 'dummy Id',
    esTitle: 'dummy es Title',
    title: 'title dummy',
    mainImage: 'http://dummy-image.net',
    rating: 4
  }
}

export const givenABasicFilms = (): BasicFilms => {
  return [
    {
      id: 'dummy Id',
      esTitle: 'dummy es Title',
      title: 'title dummy',
      mainImage: 'http://dummy-image.net/',
      rating: 4
    },
    {
      id: 'dummy Id 2',
      esTitle: 'dummy es Title 2',
      title: 'title dummy 2',
      mainImage: 'http://dummy-image2.net/',
      rating: 2
    }
  ]
}