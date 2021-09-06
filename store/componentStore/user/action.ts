import { UserTypes, UserActions } from 'store/interface'

export const UserLogin = (userInfo: any): UserActions => {
  return {
    type: UserTypes.User.USER_SAVE,
    userInfo
  }
}

export const UserLogout = (): UserActions => {
  return {
    type: UserTypes.User.USER_RESET
  }
}

export const ListPatientRequest = (): UserActions => {
  return { type: UserTypes.Patient.LIST_PATIENT_REQUEST }
}

export const ListPatientRequestSuccess = (listPatient: any[]): UserActions => {
  return {
    type: UserTypes.Patient.LIST_PATIENT_REQUEST_SUCCESS,
    listPatient
  }
}
export const GetBookingByUser = (): UserActions => {
  return {
    type: UserTypes.BookingByUser.LIST_BOOKING_BY_USER_REQUEST
  }
}

export const GetBookingByUserSuccess = (bookingByUser: any): UserActions => {
  return {
    type: UserTypes.BookingByUser.LIST_BOOKING_BY_USER_REQUEST_SUCCESS,
    bookingByUser
  }
}
