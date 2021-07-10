import * as demoAction from './demo.types'
import * as demoParams from './demo.types'
import { demoActionTypes } from './demo.types'

export function getDemo(
  nameColor: demoParams.getDemo_Params,
): demoAction.get_Demo {
  return {
    type: demoActionTypes.GET_DEMO,
    nameColor,
  }
}
