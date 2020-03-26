import { createReducer } from 'reduxsauce'

import authActions from '../actions/auth-actions'

const INITIAL_STATE = {
  email: '',
  password: '',
  role: '',
  token: null,
  error: null,
}

export default createReducer(INITIAL_STATE, {
  [authActions.login.success]: (state = INITIAL_STATE, { payload }) => ({
    ...state,
    ...payload,
  }),
  [authActions.login.failure]: (state = INITIAL_STATE, { payload: { error } }) => ({
    ...state,
    ...error,
  }),
  [authActions.signin.success]: (state = INITIAL_STATE, { payload }) => ({
    ...state,
    ...payload,
  }),
  [authActions.signin.failure]: (state = INITIAL_STATE, { payload: { error } }) => ({
    ...state,
    ...error,
  }),
})
