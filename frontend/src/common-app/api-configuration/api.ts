import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
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