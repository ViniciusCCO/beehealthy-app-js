import axios from 'axios'

export const api = axios.create({
  baseURL: 'local',
  timeout: 29000,
})
