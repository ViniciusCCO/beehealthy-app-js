import { combineReducers } from 'redux'

import auth from './auth'
import status from './status'

export default combineReducers({ auth, status })
