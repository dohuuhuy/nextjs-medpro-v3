import { UserTypes } from 'store/interface'

export type UserActions =
  | UserInfoAction
  | PatientAction
  | BookingByUser
  | NoticeByUser

// ------------------------thông tin đăng nhập--------------------------------------

export type UserInfoAction = UserSave | UserClear

export interface UserSave {
  type: UserTypes.User.USER_SAVE
  userInfo: any
}

export interface UserClear {
  type: UserTypes.User.USER_RESET
}

// -------------------------hồ sơ bệnh nhân-------------------------------------

export type PatientAction = ListPatientRequest | ListPatientRequestSuccess

export interface ListPatientRequest {
  type: UserTypes.Patient.LIST_PATIENT_REQUEST
}

export interface ListPatientRequestSuccess {
  type: UserTypes.Patient.LIST_PATIENT_REQUEST_SUCCESS
  listPatient: any[]
}

// -------------------------Danh sách booking theo user-------------------------------------

export type BookingByUser = Request | RequestSuccess

export interface Request {
  type: UserTypes.BookingByUser.LIST_BOOKING_BY_USER_REQUEST
}

export interface RequestSuccess {
  type: UserTypes.BookingByUser.LIST_BOOKING_BY_USER_REQUEST_SUCCESS
  bookingByUser: any[]
}

// -------------------------Danh sách Notice theo user--------------------------------------

export type NoticeByUser = NoticeRequest | NoticeRequestSuccess

export interface NoticeRequest {
  type: UserTypes.NoticeByUser.LIST_NOTICE_BY_USER_REQUEST
}

export interface NoticeRequestSuccess {
  type: UserTypes.NoticeByUser.LIST_NOTICE_BY_USER_REQUEST_SUCCESS
  noticeByUser: any[]
}
