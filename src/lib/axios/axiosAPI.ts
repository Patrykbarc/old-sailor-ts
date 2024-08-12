import axios from 'axios'

export const axiosAPI = axios.create({
  timeout: 8000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
