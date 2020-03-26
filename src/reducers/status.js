import { createReducer } from 'reduxsauce'

import statusActions from '../actions/status-actions'

const INITIAL_STATE = {
  message: null,
  color: 'success',
}

export default createReducer(INITIAL_STATE, {
  [statusActions.status]: (state = INITIAL_STATE, { payload }) => ({
    ...state,
    ...payload,
  }),
})
