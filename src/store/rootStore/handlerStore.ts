import { NODE_ENV } from '@config/envs/env'
import { VERSION } from '@config/version'
import { Store } from 'antd/lib/form/interface'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Persistor } from 'redux-persist'
import createSagaMiddleware, { Task } from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()



export const bindMiddleware = (middleware: any[]) => {
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
      console.log('Xóa persistor :>> ', localVersion, VERSION)
      persistor.purge()
    }
  } else {
    console.log('Xóa persistor :>> ', localVersion, VERSION)
    persistor.purge()
  }
}

export interface SagaStore extends Store {
  sagaTask?: Task
}

export const setVersion = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('version', VERSION)
  }
}
