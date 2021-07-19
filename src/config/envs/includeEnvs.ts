import * as development from './development'
import * as production from './production'
import * as testing from './testing'

const exportedObject: any = {
  testing,
  development,
  production,
}

export default exportedObject
