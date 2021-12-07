import global from '@componentStore/global/reducer'
import hospital from '@componentStore/hospital/reducer'
import newsReducer from '@componentStore/news/reducer'
import user from '@componentStore/user/reducer'
import total from '@src/store/componentStore/totalData/reducer'
import { AppState } from '@src/store/interface'
import { HYDRATE } from 'next-redux-wrapper'
import { Reducer } from 'react'
import { combineReducers } from 'redux'
import { AnyAction } from 'redux'

const reducers = {
  total: total,
  user: user,
  hospital: hospital,
  global: global,
  news: newsReducer
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
