import { combineReducers } from 'redux'

import DemoReducer from '@componentStore/demo/demo.reducer'
import totalDataReducer from '@componentStore/totalData/totalData.reducer'
import hospitalReducer from '@componentStore/hospital/hospital.reducer'
import newsReducer from '@componentStore/news/news.reducer'

const reducers = {
  DemoReducer,
  totalDataReducer,
  hospitalReducer,
  newsReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
