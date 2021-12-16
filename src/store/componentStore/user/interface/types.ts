export namespace UserTypes {
  export enum Bill {
    BILL_INFO_REQUEST = 'BILL_INFO_REQUEST',
    BILL_INFO_REQUEST_SUCCESS = 'BILL_INFO_REQUEST_SUCCESS'
  }

  export enum Login {
    Login_medproID = 'Login_medproID',
    login_At = 'login_At'
  }
  export enum User {
    USER_SAVE = 'USER_SAVE',
    USER_RESET = 'USER_RESET'
  }

  export enum Patient {
    LIST_PATIENT_REQUEST = 'LIST_PATIENT_REQUEST',
    LIST_PATIENT_REQUEST_SUCCESS = 'LIST_PATIENT_REQUEST_SUCCESS'
  }

  export enum BookingByUser {
    LIST_BOOKING_BY_USER_REQUEST = 'LIST_BOOKING_BY_USER_REQUEST',
    LIST_BOOKING_BY_USER_REQUEST_SUCCESS = 'LIST_BOOKING_BY_USER_REQUEST_SUCCESS'
  }

  export enum Noti {
    LIST_NOTI_REQUEST = 'LIST_NOTI_REQUEST',
    LIST_NOTI_REQUEST_SUCCESS = 'LIST_NOTI_REQUEST_SUCCESS'
  }
}