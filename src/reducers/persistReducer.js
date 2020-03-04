import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'behealthy',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers
  )

  return persistedReducer
}
