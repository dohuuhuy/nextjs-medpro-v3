import { AppState } from '@store/interface'
import hospitalReducer from '@componentStore/hospital/reducer'
import totalDataReducer from '@componentStore/totalData/reducer'
import userReducer from '@componentStore/user/reducer'
import { HYDRATE } from 'next-redux-wrapper'
import { Reducer } from 'react'
import { AnyAction, combineReducers } from 'redux'

const reducers = {
  totalDataReducer,
  hospitalReducer,
  userReducer
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
