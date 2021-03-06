import { AppState } from '@src/store/interface'
import { HYDRATE } from 'next-redux-wrapper'
import { Reducer } from 'react'
import { AnyAction, combineReducers } from 'redux'
import hospital from './componentStore/hospital/reducer'
import total from './componentStore/totalData/reducer'
import user from './componentStore/user/reducer'

const reducers = {
  total,
  user,
  hospital
  // news: newsReducer
  // booking: DemoReducer
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
