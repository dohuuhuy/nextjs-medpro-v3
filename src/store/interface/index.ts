import { AnyAction } from 'redux'
// demo
export * from '@componentStore/demo/interface/action'
export * from '@componentStore/demo/interface/types'
export * from '@componentStore/demo/interface/initialState'
export * from '@componentStore/demo/interface/params'

// user
export * from '@componentStore/user/interface/action'
export * from '@componentStore/user/interface/types'
export * from '@componentStore/user/interface/initialState'
export * from '@componentStore/user/interface/params'
// hospital
export * from '@componentStore/hospital/interface/action'
export * from '@componentStore/hospital/interface/types'
export * from '@componentStore/hospital/interface/initialState'
export * from '@componentStore/hospital/interface/params'
// news
export * from '@componentStore/news/interface/action'
export * from '@componentStore/news/interface/types'
export * from '@componentStore/news/interface/initialState'
export * from '@componentStore/news/interface/params'
// totalData
export * from '@componentStore/totalData/interface/action'
export * from '@componentStore/totalData/interface/types'
export * from '@componentStore/totalData/interface/initialState'
export * from '@componentStore/totalData/interface/params'

import { HospitalActions } from '@componentStore/hospital/interface/action'
import { NewsActions } from '@componentStore/news/interface/action'
import { TotalDataActions } from '@componentStore/totalData/interface/action'
import { UserActions } from '@componentStore/user/interface/action'
import {
  HospitalState,
  NewsState,
  TotalDataState,
  UserState,
  DemoState
} from '@store/interface'
import { combinedReducers } from '@store/rootReducer'

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
