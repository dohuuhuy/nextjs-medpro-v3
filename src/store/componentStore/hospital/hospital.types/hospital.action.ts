import { Hosptail_Types } from '@store/interface'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------
export type Hospital_Action = Hospital_Details_Action | Feature_Action
// --------------------------------------------------------------

export type Hospital_Details_Action =
  | Hospital_DETAILS_REQUEST
  | Hospital_DETAILS_REQUEST_Success
  | Hospital_Clear_Details

export interface Hospital_DETAILS_REQUEST {
  type: Hosptail_Types.Hospital_Details.Hospital_DETAILS_REQUEST
  partnerId: String
}

export interface Hospital_DETAILS_REQUEST_Success {
  type: Hosptail_Types.Hospital_Details.Hospital_DETAILS_REQUEST_SUCCESS
  hospital_details: Object
}

export interface Hospital_Clear_Details {
  type: Hosptail_Types.Hospital_Details.Hospital_CLEAR_DETAILS
}

// --------------------------------------------------------------------------

export type Feature_Action = Feature_By_Partner | Feature_By_Partner_Success

export interface Feature_By_Partner {
  type: Hosptail_Types.Feature.FEATURE_BY_PARTNER
}

export interface Feature_By_Partner_Success {
  type: Hosptail_Types.Feature.FEATURE_BY_PARTNER_SUCCESS
  feature_list: Array<any>
}
