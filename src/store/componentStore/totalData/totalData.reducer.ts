import {
  TotalDataActions,
  TotalDataState,
  TotalDataTypes
} from '@store/interface'

const initState: TotalDataState = {
  partnerId: '',
  appId: '',
  listPartners: [],
  loading: false
}

export default function totalDataReducer(
  state = initState,
  action: TotalDataActions
) {
  switch (action.type) {
    case TotalDataTypes.ListPartners.ListPartners_REQUEST_SUCCESS:
      return {
        ...state,
        listPartners: action.listPartners
      }

    case TotalDataTypes.ListPartners.SET_PartnerId: {
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
