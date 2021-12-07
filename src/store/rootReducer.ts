import { AppState } from '@src/store/interface'
import { HYDRATE } from 'next-redux-wrapper'
import { Reducer } from 'react'
import { AnyAction, combineReducers } from 'redux'

import DemoReducer from './componentStore/demo/reducer'
import hospital from './componentStore/hospital/reducer'
import newsReducer from './componentStore/news/reducer'
import total from './componentStore/totalData/reducer'
import user from './componentStore/user/reducer'

const reducers = {
  total: total,
  user: user,
  hospital: hospital,
  news: newsReducer,
  demo: DemoReducer
}

export const combinedReducers = combineReducers(reducers)

export const rootReducer: Reducer<AppState, AnyAction> = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      }

    default:
      return combinedReducers(state, action)
  }
}
