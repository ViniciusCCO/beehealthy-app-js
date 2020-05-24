import { createReducer } from 'reduxsauce'
import { actions } from '../actions/auth-actions'

const INITIAL_STATE = {
  email: null,
  password: null,
  type: null,
  role: null,
  token: null,
}

export default createReducer(INITIAL_STATE, {
  [actions.LOGINSUCCESS]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
})
