export namespace HosptailTypes {
  export enum Stepper {
    RESET_SCHEDULE = 'RESET_SCHEDULE',
    SAVE_SCHEDULE = 'SAVE_SCHEDULE'
  }

  export enum Information {
    INFORMATION_REQUEST = 'INFORMATION_REQUEST',
    INFORMATION_REQUEST_SUCCESS = 'INFORMATION_REQUEST_SUCCESS',
    INFORMATION_CLEAR = 'INFORMATION_CLEAR',
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
    FEATURE_REQUEST = 'FEATURE_REQUEST',
    FEATURE_BY_APP_REQUEST_SUCCESS = 'FEATURE_BY_APP_REQUEST_SUCCESS',
    FEATURE_BY_PARTNER_REQUEST_SUCCESS = 'FEATURE_BY_PARTNER_REQUEST_SUCCESS'
  }

  export enum ListHospital {
    LIST_HOSPITAL_REQUEST = 'LIST_HOSPITAL_REQUEST',
    LIST_HOSPITAL_REQUEST_SUCCESS = 'LIST_HOSPITAL_REQUEST_SUCCESS'
  }
  export enum BookingTree {
    BOOKING_TREE_REQUEST = 'BOOKING_TREE_REQUEST',
    BOOKING_TREE_REQUEST_SUCCESS = 'BOOKING_TREE_REQUEST_SUCCESS',
    CurrentBooking_Request = 'CurrentBooking_Request',
    CurrentBooking_Success = 'CurrentBooking_Success'
  }
}
