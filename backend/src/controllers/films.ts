import express from 'express'
import { mock_films } from './films.mock'

export const filmsRouter = express.Router()

filmsRouter.get('/all', async (_request, response) => {
  response.send(mock_films)
})