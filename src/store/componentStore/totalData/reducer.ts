import {
  TotalDataActions,
  TotalDataState,
  TotalDataTypes
} from '@store/interface'
import { HYDRATE } from 'next-redux-wrapper'

const initState: TotalDataState = {
  partnerId: '',
  appId: '',
  listPartners: [],
  listCity: [],
  loading: false
}

export default function totalDataReducer(
  state = initState,
  action: TotalDataActions | { type: typeof HYDRATE; payload: TotalDataState }
) {
  switch (action.type) {
    case TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST_SUCCESS:
      return {
        ...state,
        listPartners: action.listPartners
      }

    case TotalDataTypes.ListCity.LIST_CITY_REQUEST_SUCCESS:
      return {
        ...state,
        listCity: action.listCity
      }

    case TotalDataTypes.ListPartners.SET_PARTNERID: {
      return {
        ...state,
        partnerId: action.partnerId,
        appId: action.partnerId === 'medpro' ? action.partnerId : ''
      }
    }

    default:
      return state
  }
}