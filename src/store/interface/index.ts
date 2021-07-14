// demo
export * from '@componentStore/demo/demo.types/demo.action'
export * from '@componentStore/demo/demo.types/demo.action.types'
export * from '@componentStore/demo/demo.types/demo.initialState'
export * from '@componentStore/demo/demo.types/demo.params'
// hospital
export * from '@componentStore/hospital/hospital.types/hospital.action'
export * from '@componentStore/hospital/hospital.types/hospital.action.types'
export * from '@componentStore/hospital/hospital.types/hospital.initialState'
export * from '@componentStore/hospital/hospital.types/hospital.params'
// totalData
export * from '@componentStore/totalData/totalData.types/totalData.action'
export * from '@componentStore/totalData/totalData.types/totalData.action.types'
export * from '@componentStore/totalData/totalData.types/totalData.initialState'
export * from '@componentStore/totalData/totalData.types/totalData.params'

//
import { totalData_State, hospital_State } from '@store/interface'

export type AppState = totalData_State | hospital_State
