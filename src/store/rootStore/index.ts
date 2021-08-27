import { AppState } from '@store/interface'
import rootSaga from '@store/rootSaga'
import { createWrapper } from 'next-redux-wrapper'
import { createStore, Store } from 'redux'
import { Persistor, persistStore } from 'redux-persist'
import { Task } from 'redux-saga'
import { bindMiddleware, sagaMiddleware } from './handlerStore'
import { persistedReducer } from './persistConfig'
export let persistor: Persistor

export interface SagaStore extends Store<AppState> {
  sagaTask?: Task | undefined
}

export const store = () => {
  const store: any = createStore(
    persistedReducer(),
    bindMiddleware([sagaMiddleware])
  )
  persistor = persistStore(store)

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  store.runSagaTask()

  return store
}

export const wrapper = createWrapper<SagaStore>(store, { debug: true })
