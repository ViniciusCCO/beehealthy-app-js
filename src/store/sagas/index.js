import { routinePromiseWatcherSaga } from 'redux-saga-routines'
import { all, fork } from 'redux-saga/effects'
import authSaga from './auth-saga'

export default function* sagas() {
  try {
    yield all([fork(routinePromiseWatcherSaga), fork(authSaga)])
  } catch (error) {
    console.error(error)
  }
}
