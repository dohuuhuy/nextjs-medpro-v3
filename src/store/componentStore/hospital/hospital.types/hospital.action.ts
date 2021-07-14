import { Hospital_Details_Action_Types } from '@store/interface'

// Kiểm soát hàm thực hiện hành động ---------------------------------------------------------------------------
export type Hospital_Action = Hospital_Details_Action

export type Hospital_Details_Action =
  | Hospital_Request_Details
  | Hospital_Request_Details_Success
  | Hospital_Clear_Details
export interface Hospital_Request_Details {
  type: Hospital_Details_Action_Types.Hospital_REQUEST_DETAILS
  partnerId: String
}

export interface Hospital_Request_Details_Success {
  type: Hospital_Details_Action_Types.Hospital_REQUEST_DETAILS_SUCCESS
  hospital_details: Object
}

export interface Hospital_Clear_Details {
  type: Hospital_Details_Action_Types.Hospital_CLEAR_DETAILS
}
