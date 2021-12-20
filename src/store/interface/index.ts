import { HospitalActions } from '@componentStore/hospital/interface/action'
import { NewsActions } from '@componentStore/news/interface/action'
import { TotalDataActions } from '@componentStore/totalData/interface/action'
import { UserActions } from '@componentStore/user/interface/action'
import {
  DemoState,
  HospitalState,
  NewsState,
  TotalDataState,
  UserState
} from '@store/interface'
import { combinedReducers } from '@store/rootReducer'
import { AnyAction } from 'redux'
// demo
export * from '@componentStore/demo/interface/action'
export * from '@componentStore/demo/interface/initialState'
export * from '@componentStore/demo/interface/params'
export * from '@componentStore/demo/interface/types'
// hospital
export * from '@componentStore/hospital/interface/action'
export * from '@componentStore/hospital/interface/initialState'
export * from '@componentStore/hospital/interface/params'
export * from '@componentStore/hospital/interface/types'
// news
export * from '@componentStore/news/interface/action'
export * from '@componentStore/news/interface/initialState'
export * from '@componentStore/news/interface/params'
export * from '@componentStore/news/interface/types'
// totalData
export * from '@componentStore/totalData/interface/action'
export * from '@componentStore/totalData/interface/initialState'
export * from '@componentStore/totalData/interface/params'
export * from '@componentStore/totalData/interface/types'
// user
export * from '@componentStore/user/interface/action'
export * from '@componentStore/user/interface/initialState'
export * from '@componentStore/user/interface/params'
export * from '@componentStore/user/interface/types'

export interface AppState {
  [T: string]: any
  total: TotalDataState
  hospital: HospitalState
  news: NewsState
  user: UserState
  booking: DemoState
}

export interface AppAction extends AnyAction {
  [T: string]: any
  TotalDataActions: TotalDataActions
  hosplDataActions: HospitalActions
  NewsActions: NewsActions
  UserActions: UserActions
}

export type AppStates = ReturnType<typeof combinedReducers>
