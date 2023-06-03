import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
})

export async function get<T>(url: string,): Promise<T> {
  return instance
    .get<T>(url)
    .then((result) => {
      return Promise.resolve(result.data)
    })
    .catch((err) => {
      return Promise.reject(err)
    })
}