import { VERSION } from '@config/version'
import { rootReducer } from '@src/store/rootReducer'
import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

export const listPersists = ['user', 'total', 'hospital', 'news']

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
  storage,
  stateReconciler: autoMergeLevel2
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)
