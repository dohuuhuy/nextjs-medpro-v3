import { AppState } from '@store/interface'
import { rootReducer } from '@store/rootReducer'
import rootSaga from '@store/rootSaga'
import { createWrapper } from 'next-redux-wrapper'
import { createStore, Store } from 'redux'
import { persistStore } from 'redux-persist'
import { Task } from 'redux-saga'
import { bindMiddleware, sagaMiddleware } from './handlerStore'
import { persistedReducer } from './persistConfig'

export interface SagaStore extends Store<AppState> {
  sagaTask?: Task | undefined
}

export const store = () => {
  let store: any
  const isServer = typeof window === 'undefined'
  console.log('isServer :>> ', isServer)

  if (isServer) {
    store = createStore(rootReducer as any, bindMiddleware([sagaMiddleware]))
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
  } else {
    store = createStore(persistedReducer(), bindMiddleware([sagaMiddleware]))
    store.__persistor = persistStore(store)
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
  }
}

export const wrapper = createWrapper<SagaStore>(store)
