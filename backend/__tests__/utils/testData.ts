import { BasicFilm } from 'common/models/basicFilm'

export const givenABasicFilm = (): BasicFilm => {
  return {
    id: 'dummy Id',
    esTitle: 'dummy es Title',
    title: 'title dummy',
    mainImage: 'http://dummy-image.net',
    rating: 4,
    tags: ['foo', 'bar']
  }
}