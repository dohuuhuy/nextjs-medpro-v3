import { VERSION } from '@config/version'
import rootReducer from '@store/rootReducer'
import { persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

export const listPersists = [
  'totalDataReducer',
  'hospitalReducer',
  'newsReducer'
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

export const persistedReducer = () => {
  const storage =
    typeof window !== 'undefined'
      ? createWebStorage('local')
      : createNoopStorage()

  const persistConfig = {
    key: 'nextjs',
    version: VERSION,
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: listPersists
  }

  return persistReducer(persistConfig, rootReducer as any)
}
