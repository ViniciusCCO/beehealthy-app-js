import { createReducer } from 'reduxsauce'

const INITIAL_STATE = {
  email: '',
  password: '',
  role: '',
  token: null,
}

export default createReducer(INITIAL_STATE, {})
