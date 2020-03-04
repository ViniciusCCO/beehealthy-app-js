import { routinePromiseWatcherSaga } from 'redux-saga-routines'
import { all, fork } from 'redux-saga/effects'

export default function* sagas() {
  try {
    yield all([fork(routinePromiseWatcherSaga)])
  } catch (error) {
    console.error(error)
  }
}
