import * as demoAction from './totalData.types/totalData.action.interface'
import * as demoParams from './totalData.types/totalData.params'
import { demoActionTypes } from './totalData.types/totalData.action.types'

export const getDemo = ({
  nameColor,
}: demoParams.getDemo_Params): demoAction.get_Demo => {
  return {
    type: demoActionTypes.GET_DEMO,
    nameColor,
  }
}
