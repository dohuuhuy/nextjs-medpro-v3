import { AppState } from '@store/interface'
import rootSaga from '@store/rootSaga'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { createStore, Store } from 'redux'
import { Persistor, persistStore } from 'redux-persist'
import { Task } from 'redux-saga'
import { bindMiddleware, sagaMiddleware } from './handlerStore'
import { persistedReducer } from './persistConfig'
export let persistor: Persistor

export interface SagaStore extends Store<AppState> {
  sagaTask?: Task
}

const makeStore: MakeStore<any> = () => {
  const store = createStore(
    persistedReducer(),
    bindMiddleware([sagaMiddleware])
  )
  persistor = persistStore(store)
  ;(store as unknown as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export const wrapper = createWrapper<SagaStore>(makeStore as any)
