import { VERSION } from '@config/version'
import rootReducer from '@store/rootReducer'
import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { createNoopStorage } from './handlerStore'

export const listPersists = ['DemoReducer']

export const persistedReducer = () => {
  const storage =
    typeof window !== 'undefined'
      ? createWebStorage('local')
      : createNoopStorage()

  const persistConfig = {
    key: 'nextjs',
    version: VERSION,
    whitelist: listPersists,
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  return persistedReducer
}
