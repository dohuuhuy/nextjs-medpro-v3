import { UserTypes } from 'store/interface'

export type UserActions =
  | BillAction
  | LoginAction
  | UserInfoAction
  | PatientAction
  | BookingByUser
  | NotiAction

export type BillAction = BILL_INFO_REQUEST | BILL_INFO_REQUEST_SUCCESS

export interface BILL_INFO_REQUEST {
  type: UserTypes.Bill.BILL_INFO_REQUEST
  transactionId: string
}

export interface BILL_INFO_REQUEST_SUCCESS {
  type: UserTypes.Bill.BILL_INFO_REQUEST_SUCCESS
  billInfo: any
}

export type LoginAction = Login_medproID | login_At

export interface Login_medproID {
  type: UserTypes.Login.Login_medproID
}

export interface login_At {
  type: UserTypes.Login.login_At
  loginAt: string
}

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

export type PatientAction = listPatientRequest | listPatientRequestSuccess

export interface listPatientRequest {
  type: UserTypes.Patient.LIST_PATIENT_REQUEST
}

export interface listPatientRequestSuccess {
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

export type NotiAction = NoticeRequest | NoticeRequestSuccess

export interface NoticeRequest {
  type: UserTypes.Noti.LIST_NOTICE_BY_USER_REQUEST
}

export interface NoticeRequestSuccess {
  type: UserTypes.Noti.LIST_NOTICE_BY_USER_REQUEST_SUCCESS
  noti: any[]
}
