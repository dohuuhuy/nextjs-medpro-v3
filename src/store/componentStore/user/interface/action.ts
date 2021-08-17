import { UserTypes } from '@store/interface'

export type UserActions = UserInfoAction | PatientAction

// --------------------------------------------------------------

export type UserInfoAction = UserInfoSave

export interface UserInfoSave {
  type: UserTypes.SaveInfoUser.USER_INFO_SAVE
  userInfo: any
}

export type PatientAction = ListPatientRequest | ListPatientRequestSuccess

export interface ListPatientRequest {
  type: UserTypes.Patient.LIST_PATIENT_REQUEST
}

export interface ListPatientRequestSuccess {
  type: UserTypes.Patient.LIST_PATIENT_REQUEST_SUCCESS
  listPatient: any
}
