import { demoActionTypes } from '@store/interface'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------
export type demoAction = GetDemo | DemoSuccess | DemoFailure | DeleteColor

export interface GetDemo {
  type: demoActionTypes.GET_DEMO
  nameColor: string
}

export interface DeleteColor {
  type: demoActionTypes.DELETE_COLOR
}

export interface DemoSuccess {
  type: demoActionTypes.DEMO_SUCCESS
  nameColor: string
}

export interface DemoFailure {
  type: demoActionTypes.DEMO_FAILURE
}
