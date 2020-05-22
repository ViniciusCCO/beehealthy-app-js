import { createReducer } from 'reduxsauce'
import { actions } from '../actions/auth-actions'

const INITIAL_STATE = {
  email: '',
  password: '',
  type: '',
  role: '',
  token: null,
}

export default createReducer(INITIAL_STATE, {
  [actions.LOGINSUCCESS]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
})
