import {
  HospitalActions,
  HospitalState,
  HosptailTypes
} from '@src/store/interface'
import { HYDRATE } from 'next-redux-wrapper'

const init: HospitalState = {
  partnerId: '',
  listHospital: [],
  bookingTree: [],
  bookingCurrent: [],
  listFeatureByApp: [],
  listFeatureByPartner: [],
  information: {},
  schedule: {},
  steps: [],
  listPayment: [],
  selectedPaymentFee: {},
  paymentFee: {
    totalFee: 0,
    subTotal: 0,
    grandTotal: 0
  },
  passSchedules: false
}

export default function hospital(
  state = init,
  action: HospitalActions | { type: typeof HYDRATE; payload: HospitalState }
): HospitalState {
  switch (action.type) {
    case HosptailTypes.Information.SET_PARTNERID_HOSPITAL:
      return {
        ...state,
        partnerId: action.partnerId
      }
    case HosptailTypes.Stepper.SAVE_SCHEDULE:
      const lastTime: any = action.schedule?.time
      console.log('lastItem :>> ', lastTime)
      if (lastTime) {
        if (Object.keys(lastTime?.selected).length > 1)
          return {
            ...state,
            schedule: { ...action.schedule },
            passSchedules: true
          }
      }
      return {
        ...state,
        passSchedules: false,
        schedule: { ...action.schedule }
      }
    case HosptailTypes.Stepper.RESET_SCHEDULE:
      return {
        ...state,
        schedule: {}
      }

    case HosptailTypes.BookingTree.BOOKING_TREE_REQUEST_SUCCESS:
      return {
        ...state,
        bookingTree: action.bookingTree
      }

    case HosptailTypes.BookingTree.CurrentBooking_Success:
      return {
        ...state,
        bookingCurrent: action.bookingCur
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

    case HosptailTypes.Banners.Banners_REQUEST_SUCCESS:
      return {
        ...state,
        information: { ...state.information, banners: action.banners }
      }

    case HosptailTypes.Footer.Footer_REQUEST_SUCCESS:
      return {
        ...state,
        information: { ...state.information, footer: action.footer }
      }

    case HosptailTypes.Payment.PAYMENT_REQUEST_SUCCESS:
      return {
        ...state,
        listPayment: action.listPayment
      }

    case HosptailTypes.Payment.SELECTED_PAYMENT_FEE:
      const { totalFee, subTotal, grandTotal }: any = action.paymentFee
      return {
        ...state,
        selectedPaymentFee: action.paymentFee,
        paymentFee: {
          totalFee,
          subTotal,
          grandTotal
        }
      }

    case HosptailTypes.Payment.PAYMENT_RESET:
      return {
        ...state,
        selectedPaymentFee: {},
        paymentFee: { ...init.paymentFee }
      }

    default:
      return state
  }
}
