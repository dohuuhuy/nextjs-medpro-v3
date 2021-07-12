import { HYDRATE } from 'next-redux-wrapper'
import { PartnerId_Action_Types } from './totalData.types/totalData.action.types'

const totalData_InitialState: any = {
  parnerId: '',
  list_partners: [],
}

export default function totalData_Reducer(
  state = totalData_InitialState,
  action: any | { type: typeof HYDRATE; payload: any },
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
