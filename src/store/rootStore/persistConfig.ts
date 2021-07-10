import { VERSION } from '@config/version'
interface persistConfig {
  storage(): any
}

export const persistConfig = () => {
  const obj = {
    key: 'nextjs',
    version: VERSION,
    whitelist: ['DemoReducer'],
    // storage,
  }

  return obj
}

export const listPersists = ['DemoReducer']
