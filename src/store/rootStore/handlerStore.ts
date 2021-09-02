import { NODE_ENV } from '@config/envs/env'
import { VERSION } from '@config/version'
import { applyMiddleware, Middleware, StoreEnhancer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Persistor } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const checkVersion = (persistor: Persistor) => {
  const localVersion = localStorage.getItem('version')
  if (localVersion) {
    if (localVersion !== VERSION) {
      window.localStorage.removeItem('jwt')
      persistor.purge()
    }
  } else {
    persistor.purge()
  }
}

export const setVersion = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('version', VERSION)
  }
}
