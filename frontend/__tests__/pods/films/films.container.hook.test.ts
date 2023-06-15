import { describe, test, vi, MockedFunction } from 'vitest'
import useFilmsContainer from '../../../src/pods/films/films.container.hook'
import { renderHook, waitFor } from '@testing-library/react'
import { getFilms } from '../../../src/pods/films/films.api'
import { givenABasicFilms } from '../../utils/testData'


const mockedUsedNavigate = vi.fn()
const mockGetFilms = getFilms as MockedFunction<typeof getFilms>

vi.mock('react-router-dom', async () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...await vi.importActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}))
vi.mock('../../../src/pods/films/films.api')


describe('Films Container Hook', () => {
  test('should be load films from API', async () => {
    const films = givenABasicFilms()
    mockGetFilms.mockResolvedValueOnce(films)

    const { result } = renderHook(() => useFilmsContainer())

    await waitFor(() => {
      expect(result.current.films).toBe(films)
      expect(mockGetFilms).toHaveBeenCalledTimes(1)
    })
  })

  test('should be loading until films are loaded', async () => {
    const films = givenABasicFilms()
    mockGetFilms.mockResolvedValueOnce(films)

    const { result } = renderHook(() => useFilmsContainer())

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(result.current.films).toBe(films)
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.isLoading).toBe(false)
  })

  test('should be error when get films throws error', async () => {
    mockGetFilms.mockRejectedValue(new Error())

    const { result } = renderHook(() => useFilmsContainer())

    expect(result.current.isError).toBe(false)

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })
  })

  test('should navigate to film detail when click film', async () => {
    const films = givenABasicFilms()
    const filmIdToNavigate = films[0].id
    mockGetFilms.mockResolvedValueOnce(films)

    const { result } = renderHook(() => useFilmsContainer())

    result.current.handleOnClickFilm(filmIdToNavigate)

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1)
    expect(mockedUsedNavigate).toHaveBeenCalledWith(`/films/${filmIdToNavigate}`)
  })

  test('approval test', async () => {
    const films = givenABasicFilms()
    mockGetFilms.mockResolvedValueOnce(films)

    const { result } = renderHook(() => useFilmsContainer())

    expect(result.current.films).toEqual([])
    expect(result.current.isLoading).toBe(true)
    expect(result.current.isError).toBe(false)

    await waitFor(() => {
      expect(result.current.films).toBe(films)
      expect(result.current.isLoading).toBe(false)
      expect(result.current.isError).toBe(false)
    })
  })
})