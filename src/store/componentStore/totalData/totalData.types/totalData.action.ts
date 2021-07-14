import {
  ListPartners_Action_Types,
  partnerId_Local_Action_Types,
} from '@store/interface'

export type totalData_Action = listPartners_Action | partnerId_local_Action

// ----------------------------------------------------------------------------------------------

export type listPartners_Action =
  | listPartners_Request
  | listPartners_Request_Success
  | check_localhost
  | ListPartners_ERROR

export interface demo_get {
  type: 'from_cache'
}

export interface listPartners_Request {
  type: ListPartners_Action_Types.ListPartners_REQUEST
}

export interface listPartners_Request_Success {
  type: ListPartners_Action_Types.ListPartners_REQUEST_SUCCESS
  list_partners: Array<any>
}

export interface check_localhost {
  type: ListPartners_Action_Types.CHECK_LOCALHOST
}

export interface ListPartners_ERROR {
  type: ListPartners_Action_Types.ListPartners_ERROR
  err: boolean
}
// ----------------------------------------------------------------------------------------------
export type partnerId_local_Action = set_partnerId_local

export interface set_partnerId_local {
  type: partnerId_Local_Action_Types.partnerId_Local_REQUEST
  partnerId: String
  local: boolean
}
