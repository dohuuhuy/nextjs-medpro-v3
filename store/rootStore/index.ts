import { rootReducer } from '@store/rootReducer'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { createStore, Store } from 'redux'
import { Persistor, persistStore } from 'redux-persist'
import { Task } from 'redux-saga'
import { AppState } from 'store/interface'
import rootSaga from 'store/rootSaga'
import { bindMiddleware, sagaMiddleware } from './handlerStore'
import { persistedReducer } from './persistConfig'
export let persistor: Persistor

export interface SagaStore extends Store<AppState> {
  sagaTask?: Task | undefined
}

export const store: MakeStore<any> = () => {
  let store: any
  const isServer = typeof window !== 'undefined'

  if (isServer) {
    store = createStore(persistedReducer, bindMiddleware([sagaMiddleware]))
    store.persistor = persistStore(store)
    store.sagaTask = sagaMiddleware.run(rootSaga)
  } else {
    store = createStore(rootReducer as any, bindMiddleware([sagaMiddleware]))
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }
  return store
}

export const wrapper = createWrapper<SagaStore>(store)
