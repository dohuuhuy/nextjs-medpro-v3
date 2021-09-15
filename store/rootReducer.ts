import { AppState } from 'store/interface'
import hospital from 'store/componentStore/hospital/reducer'
import total from 'store/componentStore/totalData/reducer'
import user from 'store/componentStore/user/reducer'
import { HYDRATE } from 'next-redux-wrapper'
import { Reducer } from 'react'
import { AnyAction, combineReducers } from 'redux'

const reducers = {
  total,
  user,
  hospital
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
