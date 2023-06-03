import { PrismaClient } from '@prisma/client'
import { Container } from '../../src/shared/infrastructure/container'
import 'jest-extended'

jest.setTimeout(15000)

const container = new Container()
const prisma = container.invoke().resolve<PrismaClient>('db')

export default prisma

beforeEach(async () => {
  await prisma.film.create({
    data: {
      originalTitle: 'Sweeney Todd: The Demon Barber of Fleet Street',
      spanishTitle: 'Sweeney Todd, el barbero diabólico de la calle Fleet',
      date: new Date(1936, 0, 1),
      duration: 65,
      description: 'Sweeney Todd: The Demon Barber of Fleet Street es una película británica de drama de 1936, producida y dirigida por George King, y escrita por Frederick Hayward, H. F. Maltby y George Dibdin-Pitt. La película cuenta con el actor Tod Slaughter en el papel del barbero Sweeney Todd. (Wikipedia)',
      rating: 4,
      featured: true,
      recommended: true,
      review: 'Sin ser muy larga, te mantiene enganchado todo el tiempo y no se hace nada pesada, que al final estas pelis viejunas a veces son un poco aburridas. El protagonista (el barbero), se ve que es buena gente pero oye, a veces le puede un poco la avaricia :). \nAl final, como suele ocurrir en estas películas, el amor de una dama es su perdición. En fin, otro autónomo con su pequeño negocio que tiene que echar el cierre.',
      mainImage: {
        url: 'https://pics.filmaffinity.com/sweeney_todd_the_demon_barber_of_fleet_street-551582555-large.jpg'
      },
      images: [
        { url: 'https://pics.filmaffinity.com/sweeney_todd_the_demon_barber_of_fleet_street-551582555-large.jpg' },
        { url: 'https://pics.filmaffinity.com/sweeney_todd_the_demon_barber_of_fleet_street-745230280-large.jpg' }
      ],
      mainVideo: {
        url: 'https://youtu.be/tR22EMHZLGw'
      },
      videos: {
        url: 'https://youtu.be/tR22EMHZLGw'
      },
      tags: {
        connectOrCreate: [
          { where: { name: '⚪⚫ B/N' }, create: { name: '⚪⚫ B/N' } },
          { where: { name: '😱 horror' }, create: { name: '😱 horror' } }
        ],
      },
      directors: {
        connectOrCreate: [
          {
            where: { name: 'George King' },
            create:
            {
              name: 'George King',
              images: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTgzMzIyNjcyMF5BMl5BanBnXkFtZTcwMjEzNjAxMw@@._V1_QL75_UX500_CR0,45,500,281_.jpg'
              },
              mainImage:
              {
                url: 'https://m.media-amazon.com/images/M/MV5BMTgzMzIyNjcyMF5BMl5BanBnXkFtZTcwMjEzNjAxMw@@._V1_QL75_UX500_CR0,45,500,281_.jpg'
              }
            }
          }
        ],
      },
      featuredActors: {
        connectOrCreate: [
          {
            where: { name: 'Tod Slaughter' },
            create:
            {
              name: 'Tod Slaughter',
              images: {
                url: 'https://pics.filmaffinity.com/tod_slaughter-155398625883274-nm_large.jpg'
              },
              mainImage:
              {
                url: 'https://pics.filmaffinity.com/tod_slaughter-155398625883274-nm_large.jpg'
              }
            }
          }
        ],
      },
      productionCompanies: {
        connectOrCreate: [
          {
            where: { name: 'Metro-Goldwyn-Mayer' },
            create: {
              name: 'Metro-Goldwyn-Mayer',
              mainImage: { url: 'https://en.wikipedia.org/wiki/Metro-Goldwyn-Mayer#/media/File:Metro-Goldwyn-Mayer_logo.png' },
              images: { url: 'https://en.wikipedia.org/wiki/Metro-Goldwyn-Mayer#/media/File:Metro-Goldwyn-Mayer_logo.png' }
            }
          }
        ]
      }
    },
  })
})


afterEach(async () => {
  await prisma.$transaction([
    prisma.actor.deleteMany(),
    prisma.director.deleteMany(),
    prisma.film.deleteMany(),
    prisma.productionCompany.deleteMany(),
    prisma.tag.deleteMany()
  ])
})