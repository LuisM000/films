import express, { Request, Response } from 'express'
import { FilmController } from './film.controller'

export const filmRouter = express.Router()

const filmController = (req: Request) => req.container.resolve<FilmController>('filmController')

filmRouter.get('/all', (req: Request, res: Response) => {
  filmController(req).getAll(req, res)
})