import {
  totalData_Action,
  totalData_State,
  totalData_Types
} from '@store/interface'

const totalData_InitialState: totalData_State = {
  partnerId: '',
  list_partners: [],
  localhost: false,
  loading: false,
  list_error: {
    ListPartners_ERROR: false
  }
}

export default function totalData_Reducer(
  state = totalData_InitialState,
  action: totalData_Action
) {
  switch (action.type) {
    case totalData_Types.ListPartners.ListPartners_REQUEST_SUCCESS:
      return {
        ...state,

        list_partners: action.list_partners
      }

    case totalData_Types.ListPartners.SET_PartnerId: {
      return {
        ...state,
        partnerId: action.partnerId
      }
    }

    default:
      return state
  }
}
