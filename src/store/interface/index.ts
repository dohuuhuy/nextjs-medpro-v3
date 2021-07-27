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
// news
export * from '@componentStore/news/news.types/news.action'
export * from '@componentStore/news/news.types/news.action.types'
export * from '@componentStore/news/news.types/news.initialState'
export * from '@componentStore/news/news.types/news.params'
// totalData
export * from '@componentStore/totalData/totalData.types/totalData.action'
export * from '@componentStore/totalData/totalData.types/totalData.action.types'
export * from '@componentStore/totalData/totalData.types/totalData.initialState'
export * from '@componentStore/totalData/totalData.types/totalData.params'

import { hospital_State, news_State, totalData_State } from '@store/interface'

export type AppState = {
  totalData_Reducer: totalData_State
  hospital_Reducer: hospital_State
  news_Reducer: news_State
}
