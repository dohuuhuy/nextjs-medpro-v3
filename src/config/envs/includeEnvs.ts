import * as development from './development'
import * as production from './production'
import * as testing from './testing'

export type ENVObj = {
  testing: typeof testing
  development: typeof development
  production: typeof production
  // [T: string]: any
}

const exportedObject: ENVObj = {
  testing,
  development,
  production
}

export default exportedObject
