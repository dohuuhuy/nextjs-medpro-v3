import { UserTypes } from '@store/interface'
import { Action } from 'redux'

export type UserActions = Action<UserInfoAction> | Action<PatientAction>

// --------------------------------------------------------------

export type UserInfoAction = UserSave | UserClear

export interface UserSave {
  type: UserTypes.User.USER_SAVE
  userInfo: any
}

export interface UserClear {
  type: UserTypes.User.USER_RESET
}

export type PatientAction = ListPatientRequest | ListPatientRequestSuccess

export interface ListPatientRequest {
  type: UserTypes.Patient.LIST_PATIENT_REQUEST
}

export interface ListPatientRequestSuccess {
  type: UserTypes.Patient.LIST_PATIENT_REQUEST_SUCCESS
  listPatient: any[]
}
