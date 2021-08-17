export interface UserState {
  userInfo: {
    fullName: string
    userName: string
    email: string
    token: string
    isCS: boolean
  }
  listPatient: any
  [x: string]: any
}
