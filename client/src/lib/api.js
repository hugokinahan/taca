import axios from 'axios'
// import { getToken } from './auth'

// function headers() {
//   return {
//     headers: { Authorization: `Bearer ${getToken()}` }
//   }
// }

const baseUrl = '/api'

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}