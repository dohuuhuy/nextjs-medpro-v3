import { demoAction, demoActionTypes, demoParams } from '@src/store/interface'

export const getDemo = ({
  nameColor
}: demoParams.GetDemoParams): demoAction => {
  return {
    type: demoActionTypes.GET_DEMO,
    nameColor
  }
}

export const deleteColor = (): demoAction => {
  return {
    type: demoActionTypes.DELETE_COLOR
  }
}
