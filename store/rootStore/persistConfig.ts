import { VERSION } from '@config/version'
import { rootReducer } from 'store/rootReducer'
import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

export const listPersists = [
  'totalDataReducer',
  'hospitalReducer',
  'userReducer'
]

export const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null)
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: string) {
      return Promise.resolve()
    }
  }
}

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()

const persistConfig = {
  key: 'nextjs',
  version: VERSION,
  whitelist: listPersists,
  storage: storage
}

export const persistedReducer = persistReducer(
  persistConfig,
  rootReducer as any
)
