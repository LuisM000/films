import { prismaFilmQueries } from './utils'
import 'jest-extended'

describe('Prisma queries', () => {
  test('should return all films', async () => {
    const films = await prismaFilmQueries().all()

    expect(films).toBeArrayOfSize(1)
    expect(films).toIncludeAllPartialMembers([{
      title: 'Sweeney Todd: The Demon Barber of Fleet Street',
      esTitle: 'Sweeney Todd, el barbero diabólico de la calle Fleet',
      rating: 4,
      mainImage: 'https://pics.filmaffinity.com/sweeney_todd_the_demon_barber_of_fleet_street-551582555-large.jpg',
      tags: ['⚪⚫ B/N', '😱 horror']
    }])
    expect(films[0].id).not.toBeEmpty()
  })
})