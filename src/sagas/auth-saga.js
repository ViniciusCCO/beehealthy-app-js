import { all, call, put, takeLatest } from 'redux-saga/effects'

import authActions from '../actions/auth-actions'
import statusActions from '../actions/status-actions'
import * as api from '../services/api'

function* login({ payload }) {
  try {
    const { email, password } = payload
    const response = yield call(api.login, { email, password })
    yield put({
      type: statusActions.status,
      payload: { message: 'Usuário criado com sucesso', color: 'success' },
    })

    console.log(response)
  } catch (error) {
    yield put({
      type: statusActions.status,
      payload: { message: 'Erro ao criar o usuário', color: 'danger' },
    })
    // console.error(error)
  }
}

function* signin({ payload }) {
  try {
    const { name, email, password } = payload
    console.log('saga signin', name, email, password)
    const response = yield call(api.signin, { name, email, password })
    yield put({
      type: statusActions.status,
      payload: { message: 'Usuário criado com sucesso', color: 'success' },
    })
  } catch (error) {
    yield put({
      type: statusActions.status,
      payload: { message: 'Erro ao criar o usuário', color: 'danger' },
    })
    // console.error(error)
  }
}

export default function* authSagas() {
  try {
    yield all([
      yield takeLatest(authActions.login.TRIGGER, login),
      yield takeLatest(authActions.signin.TRIGGER, signin),
    ])
  } catch (error) {
    console.error(error)
  }
}
