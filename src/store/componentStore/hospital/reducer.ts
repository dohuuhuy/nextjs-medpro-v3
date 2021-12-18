import {
  HospitalActions,
  HospitalState,
  HosptailTypes
} from '@src/store/interface'
import { HYDRATE } from 'next-redux-wrapper'

const init: HospitalState = {
  // --> info -->
  partnerId: '',
  listHospital: [],
  information: {},

  // --> booking -->
  bookingTree: [],
  bookingCurrent: [],

  // --> feature -->
  listFeatureByApp: [],
  listFeatureByPartner: [],
  selectedFeature: {},
  flow: '',
  treeId: '',

  // --> schedule -->
  schedule: {},
  passSchedules: false,

  // --> payment -->
  listPayment: [],
  selectedPaymentFee: {},
  paymentFee: {
    subTotal: -1,
    totalFee: 0,
    grandTotal: 0
  },

  // --> sau khi thanh toán xong
  reserveBooking: []
}

export default function hospital(
  state = init,
  action: HospitalActions | { type: typeof HYDRATE; payload: HospitalState }
): HospitalState {
  switch (action.type) {
    case HosptailTypes.ReserveBooking.ReserveBooking_REQUEST_SUCCESS:
      return {
        ...state,
        reserveBooking: action.ReserveBooking
      }

    case HosptailTypes.Information.SET_PARTNERID_HOSPITAL:
      return {
        ...state,
        partnerId: action.partnerId
      }
    case HosptailTypes.Stepper.SAVE_SCHEDULE:
      const lastTime: any = action.schedule?.time
      if (lastTime) {
        if (Object.keys(lastTime?.selected).length > 1) {
          return {
            ...state,
            schedule: { ...action.schedule },
            passSchedules: true
          }
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
        bookingCurrent: action.bookingCurrent
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

    case HosptailTypes.Feature.SELECTED_FEATURE:
      const infoPartner = action.selectedFeature

      let flow, treeId

      if (infoPartner.type) {
        flow = infoPartner?.type
        treeId = flow ? flow.split('.')[1]?.toUpperCase() : ''
      }

      const reset = {
        passSchedules: false,
        listPayment: [],
        paymentFee: {
          ...init.paymentFee
        },
        selectedPaymentFee: {},
        bookingCurrent: {},
        bookingTree: {},
        schedule: {}
      }

      return {
        ...state,
        selectedFeature: infoPartner,
        flow: flow || '',
        treeId: treeId || '',
        ...reset //--> reset lai data khi chọn feature khác
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
          subTotal,
          totalFee,
          grandTotal
        }
      }

    case HosptailTypes.Payment.PAYMENT_RESET:
      return {
        ...state,
        selectedPaymentFee: {},
        paymentFee: { ...init.paymentFee },
        listPayment: []
      }

    default:
      return state
  }
}
