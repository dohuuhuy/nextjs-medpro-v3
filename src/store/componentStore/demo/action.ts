import { demoAction, demoActionTypes, demoParams } from '@src/store/interface'

export const getDemo = ({
  bookingCurrent
}: demoParams.GetDemoParams): demoAction => {
  return {
    type: demoActionTypes.GET_DEMO,
    bookingCurrent
  }
}

export const deleteColor = (): demoAction => {
  return {
    type: demoActionTypes.DELETE_COLOR
  }
}
