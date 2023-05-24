import { FilmQueries } from '../../../../src/application/queries/filmQueries'
import { GetFilmsUseCase } from '../../../../src/application/useCases/getFilmsUseCase'
import { mock } from 'jest-mock-extended'
import { givenABasicFilm } from '../../../utils/testData'

describe('Get Films use case', () => {
  test('call to film query and returns films', async () => {
    const basicFilm = givenABasicFilm()
    const filmsQueriesMock = mock<FilmQueries>()
    filmsQueriesMock.all.mockResolvedValue([basicFilm])
    const useCase = new GetFilmsUseCase(filmsQueriesMock)

    const films = await useCase.invoke()

    expect(films).toIncludeSameMembers([basicFilm])
    expect(filmsQueriesMock.all).toHaveBeenCalledOnce()
  })
})