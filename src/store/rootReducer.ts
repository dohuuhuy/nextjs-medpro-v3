import { combineReducers } from 'redux'

import DemoReducer from '@componentStore/demo/demo.reducer'
import totalDataReducer from '@componentStore/totalData/totalData.reducer'
import hospitalReducer from '@componentStore/hospital/hospital.reducer'
import news_Reducer from '@componentStore/news/news.reducer'

const reducers = {
  DemoReducer,
  totalDataReducer,
  hospitalReducer,
  news_Reducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
