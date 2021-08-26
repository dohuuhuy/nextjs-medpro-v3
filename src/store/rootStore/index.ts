import { AppState } from '@store/interface'
import { rootReducer } from '@store/rootReducer'
import rootSaga from '@store/rootSaga'
import { createWrapper } from 'next-redux-wrapper'
import { createStore, Store } from 'redux'
import { Persistor } from 'redux-persist'
import { Task } from 'redux-saga'
import { bindMiddleware, sagaMiddleware } from './handlerStore'
export let persistor: Persistor

export interface SagaStore extends Store<AppState> {
  sagaTask?: Task
}

export const store = () => {
  const store = createStore(
    rootReducer as any,
    bindMiddleware([sagaMiddleware])
  )
  // persistor = persistStore(store)
  ;(store as unknown as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export const wrapper = createWrapper<SagaStore>(store as any)
