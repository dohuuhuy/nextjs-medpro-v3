import {
  Hospital_Action,
  hospital_State,
  Hosptail_Types
} from '@store/interface'

const hospital_InitialState: hospital_State = {
  hospital_details: {},
  feature_list: []
}

export default function hospital_Reducer(
  state = hospital_InitialState,
  action: Hospital_Action
) {
  switch (action.type) {
    case Hosptail_Types.Hospital_Details.Hospital_DETAILS_REQUEST_SUCCESS:
      return {
        ...state,
        hospital_details: action.hospital_details
      }

    case Hosptail_Types.Hospital_Details.Hospital_CLEAR_DETAILS: {
      return {
        ...state,
        hospital_details: hospital_InitialState.hospital_details
      }
    }

    case Hosptail_Types.Feature.FEATURE_BY_PARTNER_SUCCESS:
      return {
        ...state,
        feature_list: action.feature_list
      }

    default:
      return state
  }
}
