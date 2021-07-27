import { combineReducers } from 'redux'

import DemoReducer from '@componentStore/demo/demo.reducer'
import totalData_Reducer from '@componentStore/totalData/totalData.reducer'
import hospital_Reducer from '@componentStore/hospital/hospital.reducer'
import news_Reducer from '@componentStore/news/news.reducer'

const reducers = {
  DemoReducer,
  totalData_Reducer,
  hospital_Reducer,
  news_Reducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
