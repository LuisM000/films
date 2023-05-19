import { response } from 'express'

export const mockResponse = () => {
  const res = response
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}