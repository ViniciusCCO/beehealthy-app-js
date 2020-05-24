import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cc248300.ngrok.io',
  timeout: 29000,
})

export const login = async ({ email, password }) => {
  return api.post('/account/login', { email, password })
}

export const signin = async ({ name, email, password, type }) => {
  return api.post('/account/signin', { name, email, password, type })
}
