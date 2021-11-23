import { HospitalActions, HospitalState, HosptailTypes } from 'store/interface'
import { HYDRATE } from 'next-redux-wrapper'

const init: HospitalState = {
  listHospital: [],
  bookingTree: [],
  listFeatureByApp: [],
  listFeatureByPartner: [],
  information: {}
}

export default function hospital(
  state = init,
  action: HospitalActions | { type: typeof HYDRATE; payload: HospitalState }
) {
  switch (action.type) {
    case HosptailTypes.BookingTree.BOOKING_TREE_REQUEST_SUCCESS:
      return {
        ...state,
        bookingTree: action.bookingTree
      }

    case HosptailTypes.Feature.FEATURE_BY_PARTNER_REQUEST_SUCCESS:
      return {
        ...state,
        listFeatureByPartner: action.listFeatureByPartner
      }

    case HosptailTypes.Feature.FEATURE_BY_APP_REQUEST_SUCCESS:
      return {
        ...state,
        listFeatureByApp: action.listFeatureByApp
      }

    case HosptailTypes.ListHospital.LIST_HOSPITAL_REQUEST_SUCCESS:
      return {
        ...state,
        listHospital: action.listHospital
      }

    case HosptailTypes.Header.Header_REQUEST_SUCCESS:
      return {
        ...state,
        information: { ...state.information, header: action.header }
      }

    case HosptailTypes.Footer.Footer_REQUEST_SUCCESS:
      return {
        ...state,
        information: { ...state.information, footer: action.footer }
      }

    default:
      return state
  }
}
