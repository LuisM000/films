import { PrismaClient } from '@prisma/client'
import { BasicFilms } from 'common/models/basicFilm'
import { FilmQueries } from '../../application/queries/filmQueries'

export class PrismaFilmQueries implements FilmQueries {

  constructor(private db: PrismaClient) {
  }

  async all(): Promise<BasicFilms> {
    const films = await this.db.film.findMany({
      select: {
        id: true,
        originalTitle: true,
        spanishTitle: true,
        rating: true,
        mainImage: { select: { url: true } },
        tags: { select: { name: true } }
      }
    })

    return films.map(film => ({
      id: film.id,
      title: film.originalTitle,
      esTitle: film.spanishTitle || '',
      rating: film.rating,
      mainImage: film.mainImage.url,
      tags: film.tags.map(tag => tag.name)
    }))
  }
}