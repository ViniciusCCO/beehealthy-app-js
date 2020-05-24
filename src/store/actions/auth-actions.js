export const actions = {
  LOGIN: 'LOGIN/TRIGGER',
  LOGINSUCCESS: 'LOGIN/SUCCESS',
  SIGNIN: 'SIGNIN/TRIGGER',
}

export const loginSuccess = ({ payload }) => ({ type: actions.LOGINSUCCESS, payload })

export const loginTrigger = ({ payload }) => ({ type: actions.LOGIN, payload })

export const signinTrigger = ({ payload }) => ({ type: actions.SIGNIN, payload })
