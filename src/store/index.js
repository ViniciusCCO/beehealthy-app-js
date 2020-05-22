import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import persistReducers from './reducers/persistReducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, logger]

const store = createStore(persistReducers(reducers), applyMiddleware(...middlewares))

const persistor = persistStore(store)

sagaMiddleware.run(sagas)

export { store, persistor }
