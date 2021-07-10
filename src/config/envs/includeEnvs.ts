import * as production from './production'
import * as development from './development'
import * as test from './testing'

interface Envs {
  test?: any
  production?: any
  development?: any
}

const exportedObject: Envs = {
  test,
  development,
  production,
}

export default exportedObject
