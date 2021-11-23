import { AppState } from 'store/interface'

import { HYDRATE } from 'next-redux-wrapper'
import { Reducer } from 'react'
import { AnyAction, combineReducers } from 'redux'
import global from '@componentStore/global/reducer'
import hospital from '@componentStore/hospital/reducer'
import user from '@componentStore/user/reducer'
import total from 'store/componentStore/totalData/reducer'

const reducers = {
  total: total,
  user: user,
  hospital: hospital,
  global: global
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
      return combinedReducers(state as any, action)
  }
}
