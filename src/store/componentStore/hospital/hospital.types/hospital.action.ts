import { Hosptail_Types } from '@store/interface'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------
export type Hospital_Action =
  | Infomation_Action
  | Feature_Action
  | ListHospital_Action
// --------------------------------------------------------------

export type Infomation_Action =
  | Information_Request
  | Information_Request_Success
  | Hospital_Clear_Details

export interface Information_Request {
  type: Hosptail_Types.Information.Information_REQUEST
  partnerId: String
}

export interface Information_Request_Success {
  type: Hosptail_Types.Information.Information_REQUEST_SUCCESS
  information: Object
}

export interface Hospital_Clear_Details {
  type: Hosptail_Types.Information.Hospital_CLEAR_DETAILS
}

// --------------------------------------------------------------------------

export type Feature_Action =
  | FeatureByPartner_Request
  | FeatureByPartner_Request_Success

export interface FeatureByPartner_Request {
  type: Hosptail_Types.Feature.FeatureByPartner_REQUEST
}

export interface FeatureByPartner_Request_Success {
  type: Hosptail_Types.Feature.FeatureByPartner_REQUEST_SUCCESS
  feature_list: any[]
}

export type ListHospital_Action =
  | ListHospital_Request
  | ListHospital_Request_Success

export interface ListHospital_Request {
  type: Hosptail_Types.ListHospital.ListHospital_REQUEST
}

export interface ListHospital_Request_Success {
  type: Hosptail_Types.ListHospital.ListHospital_REQUEST_SUCCESS
  listHospital: any[]
}
