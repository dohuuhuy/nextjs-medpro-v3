import { UserTypes, UserActions } from '@src/store/interface'

export const getBillInfo = (transactionId: any): UserActions => {
  return {
    type: UserTypes.Bill.BILL_INFO_REQUEST,
    transactionId
  }
}

export const getBillInfoSuccess = (billInfo: any): UserActions => {
  return {
    type: UserTypes.Bill.BILL_INFO_REQUEST_SUCCESS,
    billInfo
  }
}

export const loginMedproId = (): UserActions => {
  return {
    type: UserTypes.Login.Login_medproID
  }
}

export const loginAt = (loginAt: string): UserActions => {
  return {
    type: UserTypes.Login.login_At,
    loginAt
  }
}

export const userSave = (userInfo: any): UserActions => {
  return {
    type: UserTypes.User.USER_SAVE,
    userInfo
  }
}

export const userLogout = (): UserActions => {
  return {
    type: UserTypes.User.USER_RESET
  }
}

//----------------- Danh sách Patient----------------------//
export const listPatientRequest = (): UserActions => {
  return { type: UserTypes.Patient.LIST_PATIENT_REQUEST }
}

export const listPatientRequestSuccess = (listPatient: any[]): UserActions => {
  return {
    type: UserTypes.Patient.LIST_PATIENT_REQUEST_SUCCESS,
    listPatient
  }
}

export const selectedPatient = (selectedPatient: any): UserActions => {
  return {
    type: UserTypes.Patient.SELECTED_PATIENT,
    selectedPatient
  }
}

// --------------------------Booking---------------------//
export const getBookingByUser = (): UserActions => {
  return {
    type: UserTypes.BookingByUser.LIST_BOOKING_BY_USER_REQUEST
  }
}

export const getBookingByUserSuccess = (bookingByUser: any): UserActions => {
  return {
    type: UserTypes.BookingByUser.LIST_BOOKING_BY_USER_REQUEST_SUCCESS,
    bookingByUser
  }
}

// --------------------------Notice-----------------------//
export const getNoti = (): UserActions => {
  return {
    type: UserTypes.Noti.LIST_NOTI_REQUEST
  }
}

export const getNotiSuccess = (noti: any): UserActions => {
  return {
    type: UserTypes.Noti.LIST_NOTI_REQUEST_SUCCESS,
    noti
  }
}
