import {
  partnerId_Action,
  PartnerId_Action_Types,
  totalData_State,
} from '@store/interface'

const totalData_InitialState: totalData_State = {
  partnerId: '',
  list_partners: [],
}

export default function totalData_Reducer(
  state = totalData_InitialState,
  action: partnerId_Action,
) {
  switch (action.type) {
    case PartnerId_Action_Types.PartnerId_REQUEST_SUCCESS:
      return {
        ...state,
        list_partners: action.list_partners,
      }
    default:
      return state
  }
}
