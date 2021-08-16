import { HospitalActions, HospitalState, HosptailTypes } from '@store/interface'
import { HYDRATE } from 'next-redux-wrapper'

const init: HospitalState = {
  information: {
    partnerId: '',
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
  listHospital: [],
  bookingTree: []
}

export default function hospitalReducer(
  state = init,
  action: HospitalActions | { type: typeof HYDRATE; payload: HospitalState }
) {
  switch (action.type) {
    case HosptailTypes.BookingTree.BOOKING_TREE_REQUEST_SUCCESS:
      return {
        ...state,
        bookingTree: action.bookingTree
      }

    case HosptailTypes.Information.INFORMATION_REQUEST_SUCCESS:
      return {
        ...state,
        information: action.information
      }

    case HosptailTypes.Information.INFORMATION_CLEAR: {
      return {
        ...state,
        information: state.information
      }
    }

    case HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST_SUCCESS:
      return {
        ...state,
        listFeature: action.listFeature
      }

    case HosptailTypes.ListHospital.LIST_HOSPITAL_REQUEST_SUCCESS:
      return {
        ...state,
        listHospital: action.listHospital
      }

    default:
      return state
  }
}
