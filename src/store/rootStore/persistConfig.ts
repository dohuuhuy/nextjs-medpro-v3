import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { VERSION } from '@config/version'
import rootReducer from '@store/rootReducer'
import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

export const listPersists = [
  'totalData_Reducer',
  'hospital_Reducer',
  'news_Reducer'
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

  const persistedReducer = persistReducer(persistConfig, rootReducer as any)

  return persistedReducer
}
