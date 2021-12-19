export namespace HosptailTypes {
  export enum Stepper {
    RESET_SCHEDULE = 'RESET_SCHEDULE',
    SAVE_SCHEDULE = 'SAVE_SCHEDULE'
  }

  export enum Information {
    Information_REQUEST = 'Information_REQUEST',
    Information_REQUEST_SUCCESS = 'Information_REQUEST_SUCCESS',
    Information_CLEAR = 'Information_CLEAR',
    SET_PARTNERID_HOSPITAL = 'SET_PARTNERID_HOSPITAL'
  }

  export enum Header {
    Header_REQUEST = 'Header_REQUEST',
    Header_REQUEST_SUCCESS = 'Header_REQUEST_SUCCESS'
  }

  export enum Footer {
    Footer_REQUEST = 'Footer_REQUEST',
    Footer_REQUEST_SUCCESS = 'Footer_REQUEST_SUCCESS'
  }

  export enum Banners {
    Banners_REQUEST = 'Banners_REQUEST',
    Banners_REQUEST_SUCCESS = 'Banners_REQUEST_SUCCESS'
  }

  export enum Feature {
    Feature_REQUEST = 'Feature_REQUEST',
    Feature_BY_APP_REQUEST_SUCCESS = 'Feature_BY_APP_REQUEST_SUCCESS',
    Feature_BY_PARTNER_REQUEST_SUCCESS = 'Feature_BY_PARTNER_REQUEST_SUCCESS',
    SELECTED_FEATURE = 'SELECTED_FEATURE'
  }

  export enum ListHospital {
    ListHospital_REQUEST = 'ListHospital_REQUEST',
    ListHospital_REQUEST_SUCCESS = 'ListHospital_REQUEST_SUCCESS'
  }
  export enum BookingTree {
    BOOKING_TREE_REQUEST = 'BOOKING_TREE_REQUEST',
    BOOKING_TREE_REQUEST_SUCCESS = 'BOOKING_TREE_REQUEST_SUCCESS',
    CurrentBooking_Request = 'CurrentBooking_Request',
    CurrentBooking_Success = 'CurrentBooking_Success'
  }
  export enum Payment {
    Payment_REQUEST = 'Payment_REQUEST',
    Payment_REQUEST_SUCCESS = 'Payment_REQUEST_SUCCESS',
    Payment_RESET = 'Payment_RESET',
    SELECTED_Payment_FEE = 'SELECTED_Payment_FEE',
    RESET_SELECTED_Payment_FEE = 'RESET_SELECTED_Payment_FEE'
  }

  export enum ReserveBooking {
    ReserveBooking_REQUEST = 'ReserveBooking_REQUEST',
    ReserveBooking_REQUEST_SUCCESS = 'ReserveBooking_REQUEST_SUCCESS'
  }
  export enum CancelBooking {
    CancelBooking_REQUEST = 'CancelBooking_REQUEST',
    CancelBooking_REQUEST_SUCCESS = 'CancelBooking_REQUEST_SUCCESS'
  }

  export enum HistoryPayment {
    HistoryPayment_REQUEST = 'HistoryPayment_REQUEST',
    HistoryPayment_REQUEST_SUCCESS = 'HistoryPayment_REQUEST_SUCCESS'
  }
}
