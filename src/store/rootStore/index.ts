import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware, { Task } from 'redux-saga'
import rootReducer from '../rootReducer'
import rootSaga from '../rootSaga'

export interface SagaStore extends Store {
  sagaTask?: Task
}

const makeStore: MakeStore<any> = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )

  ;(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper<any>(makeStore, { debug: true })
