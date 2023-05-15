import express from 'express'
import { filmsRouter } from './controllers/films'

export const app = express()
  .use(express.json())

app.use('/api/films', filmsRouter)