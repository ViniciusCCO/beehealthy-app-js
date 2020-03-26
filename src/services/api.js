import axios from 'axios'

const api = axios.create({
  baseURL: 'https://0c0c028f.ngrok.iosss',
  timeout: 29000,
})

export const login = async (email, password) => api.post('/account/login', { email, password })

export const signin = async ({ name, email, password }) =>
  api.post('/account/signin', { name, email, password })
