import * as demoAction from './demo.types/demo.action.interface'
import * as demoParams from './demo.types/demo.params'
import { demoActionTypes } from './demo.types/demo.action.types'

export const getDemo = ({
  nameColor,
}: demoParams.getDemo_Params): demoAction.get_Demo => {
  return {
    type: demoActionTypes.GET_DEMO,
    nameColor,
  }
}

export const deleteColor = (): demoAction.deleteColor => {
  return {
    type: demoActionTypes.DELETE_COLOR,
  }
}
