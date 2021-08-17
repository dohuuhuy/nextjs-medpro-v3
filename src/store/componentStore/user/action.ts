import { UserTypes, UserActions } from '@store/interface'

export const saveInfoUserLogin = (userInfo: any): UserActions => {
  return {
    type: UserTypes.SaveInfoUser.USER_INFO_SAVE,
    userInfo
  }
}

export const ListPatientRequest = (): UserActions => {
  return { type: UserTypes.Patient.LIST_PATIENT_REQUEST }
}

export const ListPatientRequestSuccess = (listPatient: any): UserActions => {
  return {
    type: UserTypes.Patient.LIST_PATIENT_REQUEST_SUCCESS,
    listPatient
  }
}
