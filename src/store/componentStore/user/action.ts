import { UserTypes, UserActions } from '@store/interface'

export const saveInfoUserLogin = (userInfo: any): UserActions => {
  return {
    type: UserTypes.SaveInfoUser.USER_INFO_SAVE,
    userInfo
  }
}
