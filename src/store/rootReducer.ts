import { combineReducers } from 'redux'

import DemoReducer from '@componentStore/demo/demo.reducer'

const reducers = { DemoReducer }

const rootReducer = combineReducers(reducers)

export default rootReducer
