import { HospitalActions, HospitalState, HosptailTypes } from '@store/interface'

const init: HospitalState = {
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
  listFeature: [],
  listHospital: []
}

export default function hospitalReducer(state = init, action: HospitalActions) {
  switch (action.type) {
    case HosptailTypes.Information.Information_REQUEST_SUCCESS:
      return {
        ...state,
        information: action.information
      }

    case HosptailTypes.Information.Hospital_CLEAR_DETAILS: {
      return {
        ...state,
        information: state.information
      }
    }

    case HosptailTypes.Feature.FeatureByPartner_REQUEST_SUCCESS:
      return {
        ...state,
        listFeature: action.listFeature
      }

    case HosptailTypes.ListHospital.ListHospital_REQUEST_SUCCESS:
      return {
        ...state,
        listHospital: action.listHospital
      }

    default:
      return state
  }
}
