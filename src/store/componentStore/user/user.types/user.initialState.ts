export interface UserState {
  userInfo: {
    fullName: string
    userName: string
    email: string
    token: string
    isCS: boolean
  }
  [x: string]: any
}
