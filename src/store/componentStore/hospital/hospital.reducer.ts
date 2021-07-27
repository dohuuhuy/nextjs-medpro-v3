import {
  Hospital_Action,
  hospital_State,
  Hosptail_Types
} from '@store/interface'

const hospital_InitialState: hospital_State = {
  information: {
    partnerId: 'string',
    header: {},
    banners: [],
    deployHospital: [],
    introducHospital: {},
    downloadApp: {},
    supportMethods: [],
    footer: {},
    contentPage: []
  },
  feature_list: []
}

export default function hospital_Reducer(
  state = hospital_InitialState,
  action: Hospital_Action
) {
  switch (action.type) {
    case Hosptail_Types.Information.Information_REQUEST_SUCCESS:
      return {
        ...state,
        information: action.information
      }

    case Hosptail_Types.Information.Hospital_CLEAR_DETAILS: {
      return {
        ...state,
        information: hospital_InitialState.information
      }
    }

    case Hosptail_Types.Feature.FeatureByPartner_REQUEST_SUCCESS:
      return {
        ...state,
        feature_list: action.feature_list
      }

    default:
      return state
  }
}
