import { all, call, put, takeLatest } from 'redux-saga/effects'
import { actions } from '../actions/auth-actions'
import * as api from '../../services/api'

function* login({ payload: { email, password, type } }) {
  try {
    const {
      data: { token },
    } = yield call(api.login, { email, password, type })
    yield put({ type: actions.LOGINSUCCESS, payload: { token } })
  } catch (error) {
    console.error(error)
  }
}

function* signin({ payload: { name, email, password, type } }) {
  try {
    yield call(api.signin, { name, email, password, type })
  } catch (error) {
    console.error(error)
  }
}

export default function* authSaga() {
  try {
    yield all([yield takeLatest(actions.LOGIN, login), yield takeLatest(actions.SIGNIN, signin)])
  } catch (error) {
    console.error(error)
  }
}
