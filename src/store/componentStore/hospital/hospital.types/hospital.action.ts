import { HosptailTypes } from '@store/interface'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------

export type HospitalActions =
  | InfomationAction
  | FeatureAction
  | ListHospitalAction

// --------------------------------------------------------------

export type InfomationAction =
  | Information_Request
  | Information_Request_Success
  | Hospital_Clear_Details

export interface Information_Request {
  type: HosptailTypes.Information.Information_REQUEST
  partnerId: String
}

export interface Information_Request_Success {
  type: HosptailTypes.Information.Information_REQUEST_SUCCESS
  information: Object
}

export interface Hospital_Clear_Details {
  type: HosptailTypes.Information.Hospital_CLEAR_DETAILS
}

// --------------------------------------------------------------------------

export type FeatureAction =
  | FeatureByPartner_Request
  | FeatureByPartner_Request_Success

export interface FeatureByPartner_Request {
  type: HosptailTypes.Feature.FeatureByPartner_REQUEST
}

export interface FeatureByPartner_Request_Success {
  type: HosptailTypes.Feature.FeatureByPartner_REQUEST_SUCCESS
  listFeature: any[]
}

export type ListHospitalAction =
  | ListHospital_Request
  | ListHospital_Request_Success

export interface ListHospital_Request {
  type: HosptailTypes.ListHospital.ListHospital_REQUEST
}

export interface ListHospital_Request_Success {
  type: HosptailTypes.ListHospital.ListHospital_REQUEST_SUCCESS
  listHospital: any[]
}
