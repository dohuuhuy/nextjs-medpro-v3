import { demoAction, demoActionTypes, demoParams } from '@store/interface'

export const getDemo = ({ nameColor }: demoParams.): demoAction => {
  return {
    type: demoActionTypes.GET_DEMO,
    nameColor,
  }
}

export const deleteColor = (): demoAction => {
  return {
    type: demoActionTypes.DELETE_COLOR,
  }
}
