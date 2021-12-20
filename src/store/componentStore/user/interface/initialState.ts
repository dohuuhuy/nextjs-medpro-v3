export interface UserState {
  userInfo: userInfo
  listPatient: any[]
  bookingByUser: any[]
  noti: any[]
  loginAt: string
  billInfo: any
  selectedPatient: any
  cancelBooking: any
}

interface userInfo {
  fullName?: string
  userName?: string
  email?: string
  token?: string
  isCS?: boolean
}
