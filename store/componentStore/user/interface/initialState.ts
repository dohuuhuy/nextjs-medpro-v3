export interface UserState {
  userInfo: userInfo
  listPatient: Array<any>
  bookingByUser: Array<any>
  noticeByUser: Array<any>
  loginAt: string
}

interface userInfo {
  fullName?: string
  userName?: string
  email?: string
  token?: string
  isCS?: boolean
}
