import { combinedReducers } from '@store/rootReducer'

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

export type AppState = ReturnType<typeof combinedReducers>
