/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Alert from './components/Alert'
import createRouter from './routes'
import { persistor, store } from './store'

const RouteConfig = () => {
  const token = useSelector(state => state.auth.token)
  const Routes = createRouter(token)

  return <Routes />
}

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Alert />
      <RouteConfig />
    </PersistGate>
  </Provider>
)

export default App
