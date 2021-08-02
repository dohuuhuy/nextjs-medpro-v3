import { UserTypes } from '@store/interface'

export type UserActions = UserInfoAction

// --------------------------------------------------------------

export type UserInfoAction = UserInfoSave

export interface UserInfoSave {
  type: UserTypes.SaveInfoUser.USER_INFO_SAVE
  userInfo: any
}
