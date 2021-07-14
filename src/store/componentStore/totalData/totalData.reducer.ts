import {
  ListPartners_Action_Types,
  totalData_Action,
  totalData_State,
} from '@store/interface'

const totalData_InitialState: totalData_State = {
  partnerId: '',
  list_partners: [],
}

export default function totalData_Reducer(
  state = totalData_InitialState,
  action: totalData_Action,
) {
  switch (action.type) {
    case ListPartners_Action_Types.ListPartners_REQUEST_SUCCESS:
      return {
        ...state,
        list_partners: action.list_partners,
      }
    default:
      return state
  }
}
