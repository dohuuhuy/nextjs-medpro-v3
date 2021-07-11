import rootReducer from '@store/rootReducer'
import rootSaga from '@store/rootSaga'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { createStore } from 'redux'
import { Persistor, persistStore } from 'redux-persist'

import { bindMiddleware, sagaMiddleware } from './handlerStore'
import { persistedReducer } from './persistConfig'
export let persistor: Persistor

const makeStore: MakeStore<any> = ({ isServer }: any) => {
  if (isServer) {
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))
    return store
  } else {
    const store = createStore(
      persistedReducer(),
      bindMiddleware([sagaMiddleware]),
    )

    persistor = persistStore(store)

    sagaMiddleware.run(rootSaga)

    return store
  }
}

export const wrapper = createWrapper<any>(makeStore)
