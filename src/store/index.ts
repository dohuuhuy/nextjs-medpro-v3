import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga'

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore: MakeStore<any> = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper<any>(makeStore, { debug: true })
