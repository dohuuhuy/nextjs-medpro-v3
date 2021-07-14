import {
  Hospital_Action,
  Hospital_Action_Types,
  hospital_State,
} from '@store/interface'

const hospital_InitialState: hospital_State = {
  hospital_details: {},
}

export default function hospital_Reducer(
  state = hospital_InitialState,
  action: Hospital_Action,
) {
  switch (action.type) {
    case Hospital_Action_Types.Hospital_REQUEST_DETAILS_SUCCESS:
      return {
        ...state,
        hospital_details: action.hospital_details,
      }
    default:
      return state
  }
}
