import rootSaga from '@store/rootSaga'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { createStore } from 'redux'
import { Persistor, persistStore } from 'redux-persist'
import { bindMiddleware, sagaMiddleware } from './handlerStore'
import { persistedReducer } from './persistConfig'
export let persistor: Persistor

const makeStore: MakeStore<any> = () => {
  const store = createStore(
    persistedReducer(),
    bindMiddleware([sagaMiddleware])
  )
  persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)
  return store
}

export const wrapper = createWrapper<any>(makeStore)
