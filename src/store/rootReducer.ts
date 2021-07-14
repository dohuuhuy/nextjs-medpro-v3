import { combineReducers } from 'redux'

import DemoReducer from '@componentStore/demo/demo.reducer'
import totalData_Reducer from '@componentStore/totalData/totalData.reducer'
import hospital_Reducer from '@componentStore/hospital/hospital.reducer'

const reducers = {
  DemoReducer: DemoReducer,
  totalData_Reducer: totalData_Reducer,
  hospital_Reducer: hospital_Reducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
