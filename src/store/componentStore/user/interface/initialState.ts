export interface UserState {
  userInfo: userInfo
  listPatient: Array<any>
  bookingByUser: Array<any>
  noti: Array<any>
  loginAt: string
  billInfo: any
  selectedPatient: any
}

interface userInfo {
  fullName?: string
  userName?: string
  email?: string
  token?: string
  isCS?: boolean
}
