import { Hosptail_Types } from '@store/interface'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------
export type Hospital_Action = Infomation_Action | Feature_Action
// --------------------------------------------------------------

export type Infomation_Action =
  | Information_REQUEST
  | Information_REQUEST_Success
  | Hospital_Clear_Details

export interface Information_REQUEST {
  type: Hosptail_Types.Information.Information_REQUEST
  partnerId: String
}

export interface Information_REQUEST_Success {
  type: Hosptail_Types.Information.Information_REQUEST_SUCCESS
  information: Object
}

export interface Hospital_Clear_Details {
  type: Hosptail_Types.Information.Hospital_CLEAR_DETAILS
}

// --------------------------------------------------------------------------

export type Feature_Action =
  | FeatureByPartner_REQUEST
  | FeatureByPartner_REQUEST_Success

export interface FeatureByPartner_REQUEST {
  type: Hosptail_Types.Feature.FeatureByPartner_REQUEST
}

export interface FeatureByPartner_REQUEST_Success {
  type: Hosptail_Types.Feature.FeatureByPartner_REQUEST_SUCCESS
  feature_list: Array<any>
}
