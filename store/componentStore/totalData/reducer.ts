import {
  TotalDataActions,
  TotalDataState,
  TotalDataTypes
} from 'store/interface'
import { HYDRATE } from 'next-redux-wrapper'

const initState: TotalDataState = {
  appId: '',
  partnerId: '',
  listPartners: [],
  listCity: [],
  typeReser: 'normal'
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

    case TotalDataTypes.TypeReser.TYPE_RESER: {
      return {
        ...state,
        typeReser: 'parasitic'
      }
    }

    case HYDRATE: {
      const nextState = {
        ...state,
        ...action.payload
      }
      return nextState
    }

    default:
      return state
  }
}
