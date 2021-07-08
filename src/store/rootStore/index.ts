import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware, { Task } from 'redux-saga'
import rootReducer from '../rootReducer'
import rootSaga from '../rootSaga'
import { Persistor, persistReducer, persistStore } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
export interface SagaStore extends Store {
  sagaTask?: Task
}

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null)
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: string) {
      return Promise.resolve()
    },
  }
}

export let persistor: Persistor

const makeStore = ({ isServer }: any) => {
  if (isServer) {
    return createStore(rootReducer, bindMiddleware([sagaMiddleware]))
  } else {
    // const storage = require('redux-persist/lib/storage').default
    const storage =
      typeof window !== 'undefined'
        ? createWebStorage('local')
        : createNoopStorage()

    const persistConfig = {
      key: 'nextjs',
      version: 9,
      whitelist: ['counter'],
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

export const wrapper = createWrapper(makeStore)
