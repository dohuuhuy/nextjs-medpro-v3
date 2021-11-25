import { UserTypes, UserActions } from 'store/interface'

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
export const getNoticeByUser = (): UserActions => {
  return {
    type: UserTypes.NoticeByUser.LIST_NOTICE_BY_USER_REQUEST
  }
}

export const getNoticeByUserSuccess = (noticeByUser: any): UserActions => {
  return {
    type: UserTypes.NoticeByUser.LIST_NOTICE_BY_USER_REQUEST_SUCCESS,
    noticeByUser
  }
}
