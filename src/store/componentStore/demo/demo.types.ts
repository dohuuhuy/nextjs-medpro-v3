// Kiểm soát hành động -----------------------------------------------------------------------------------------
export enum demoActionTypes {
  GET_DEMO = 'GET_DEMO',
  DEMO_SUCCESS = 'DEMO_SUCCESS',
  DEMO_FAILURE = 'DEMO_FAILURE',
}

// Kiểm soát tham số trong hàm thực hiện hành động ---------------------------------------------------------------
export type demoParams = getDemo_Params

export interface getDemo_Params {
  nameColor: string
}

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------
export type demoAction = get_Demo | demo_success | demo_failure

export interface get_Demo {
  type: demoActionTypes.GET_DEMO
  nameColor: getDemo_Params
}

export interface demo_success {
  type: demoActionTypes.DEMO_SUCCESS
  nameColor: getDemo_Params
}

export interface demo_failure {
  type: demoActionTypes.DEMO_FAILURE
}

// typescript có 3 loại types: 1. any types, 2. build types. 3. define types
// enum và interface là do người dùng tự định nghĩa (define types)
// enum thì không thể merge lại
// sử dụng enum để truy suất phần tử con bên trong ví dụ như : enum.Color
// interface sử dụng cho những trường hợp pulic như api ...

export const GET_DEMO = 'GET_DEMO'
