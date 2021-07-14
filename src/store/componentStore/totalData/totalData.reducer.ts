import {
  ListPartners_Action_Types,
  totalData_Action,
  totalData_State,
} from '@store/interface'

const totalData_InitialState: totalData_State = {
  partnerId: '',
  list_partners: [],
  localhost: false,
  loading: false,
  list_error: {
    ListPartners_ERROR: false,
  },
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
    case ListPartners_Action_Types.CHECK_LOCALHOST:
      return {
        ...state,
        localhost: true,
      }

    case ListPartners_Action_Types.ListPartners_ERROR:
      console.log('action.err :>> ', action.err)
      if (action.err === false) {
        return {
          ...state,
          list_error: { ListPartners_ERROR: action.err },
        }
      }
      return {
        ...state,
        list_error: { ListPartners_ERROR: true },
      }
    default:
      return state
  }
}
