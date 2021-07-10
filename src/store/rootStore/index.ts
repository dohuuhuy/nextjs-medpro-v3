import { VERSION } from '@config/version'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { createStore } from 'redux'
import { Persistor, persistReducer, persistStore } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import rootReducer from '../rootReducer'
import rootSaga from '../rootSaga'
import {
  bindMiddleware,
  createNoopStorage,
  sagaMiddleware,
  SagaStore,
} from './handlerStore'
import { listPersists } from './persistConfig'

export let persistor: Persistor

const makeStore: MakeStore<any> = ({ isServer }: any) => {
  if (isServer) {
    return createStore(rootReducer, bindMiddleware([sagaMiddleware]))
  } else {
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
    const store = createStore(
      persistedReducer,
      bindMiddleware([sagaMiddleware]),
    )
    persistor = persistStore(store)
    ;(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)

    return store
  }
}

export const wrapper = createWrapper<any>(makeStore)
