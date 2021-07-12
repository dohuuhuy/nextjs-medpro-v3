import { demoParams } from '@store/interface'
import { demoActionTypes } from './demo.action.types'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------
export type demoAction = get_Demo | demo_success | demo_failure | deleteColor

export interface get_Demo {
  type: demoActionTypes.GET_DEMO
  nameColor: demoParams
}

export interface deleteColor {
  type: demoActionTypes.DELETE_COLOR
}

export interface demo_success {
  type: demoActionTypes.DEMO_SUCCESS
  nameColor: string
}

export interface demo_failure {
  type: demoActionTypes.DEMO_FAILURE
}
