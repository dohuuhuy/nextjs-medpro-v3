import { demoActionTypes } from './totalData.action.types'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------
export type demoAction = get_Demo | demo_success | demo_failure

export interface get_Demo {
  type: demoActionTypes.GET_DEMO
  nameColor: string
}

export interface demo_success {
  type: demoActionTypes.DEMO_SUCCESS
  nameColor: string
}

export interface demo_failure {
  type: demoActionTypes.DEMO_FAILURE
}
