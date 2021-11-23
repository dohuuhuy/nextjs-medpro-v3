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
  listDistrict: [],
  listWard: [],
  typeReser: 'normal',
  windows: ''
}

export default function total(
  state = initState,
  action: TotalDataActions | { type: typeof HYDRATE; payload: TotalDataState }
) {
  switch (action.type) {
    case TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST_SUCCESS:
      return {
        ...state,
        listPartners: action.listPartners
      }

    case TotalDataTypes.Address.LIST_CITY_REQUEST_SUCCESS:
      return {
        ...state,
        listCity: action.listCity
      }
    case TotalDataTypes.Address.LIST_DISTRICT_REQUEST_SUCCESS:
      return {
        ...state,
        listDistrict: action.listDistrict
      }
    case TotalDataTypes.Address.LIST_WARD_REQUEST_SUCCESS:
      return {
        ...state,
        listWard: action.listWard
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
    case TotalDataTypes.Window.Set_Window: {
      return {
        ...state,
        windows: action.data
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
