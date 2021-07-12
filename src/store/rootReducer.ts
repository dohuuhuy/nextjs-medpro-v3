import { combineReducers } from 'redux'

import DemoReducer from '@componentStore/demo/demo.reducer'
import totalData_Reducer from '@componentStore/totalData/totalData.reducer'

const reducers = {
  DemoReducer: DemoReducer,
  totalData_Reducer: totalData_Reducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
