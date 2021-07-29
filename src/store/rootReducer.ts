import DemoReducer from '@componentStore/demo/demo.reducer'
import hospitalReducer from '@componentStore/hospital/hospital.reducer'
import newsReducer from '@componentStore/news/news.reducer'
import totalDataReducer from '@componentStore/totalData/totalData.reducer'
import { HYDRATE } from 'next-redux-wrapper'
import { Reducer } from 'react'
import { AnyAction, combineReducers } from 'redux'
import { AppState } from './interface'

const reducers = {
  DemoReducer,
  totalDataReducer,
  hospitalReducer,
  newsReducer
}

const combinedReducers = combineReducers(reducers)

export const rootReducer: Reducer<AppState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }
    return nextState
  }
  return combinedReducers(state as any, action)
}
