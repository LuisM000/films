import { FilmService } from '@/services/filmService'
import { Request, Response } from 'express'

export class FilmController {

  constructor(private readonly filmService: FilmService) {
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    res.send(this.filmService.getAll())
  }
}