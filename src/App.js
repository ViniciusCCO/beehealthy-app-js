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

import createRouter from './routes'
import { persistor, store } from './store'

const RouteConfig = () => {
  const token = useSelector(state => state.auth.token)
  const Routes = createRouter(true)

  return <Routes />
}

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouteConfig />
    </PersistGate>
  </Provider>
)

export default App
