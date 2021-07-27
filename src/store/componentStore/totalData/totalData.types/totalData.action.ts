import { totalData_Types } from '@store/interface'

export type totalData_Action = listPartners_Action | partnerId_local_Action

// ----------------------------------------------------------------------------------------------

export type listPartners_Action =
  | listPartners_Request
  | listPartners_Request_Success
  | set_parnerId

export interface listPartners_Request {
  type: totalData_Types.ListPartners.ListPartners_REQUEST
}

export interface listPartners_Request_Success {
  type: totalData_Types.ListPartners.ListPartners_REQUEST_SUCCESS
  list_partners: Array<any>
}

export interface set_parnerId {
  type: totalData_Types.ListPartners.SET_PartnerId
  partnerId: any
}

// ----------------------------------------------------------------------------------------------
export type partnerId_local_Action = set_partnerId_local

export interface set_partnerId_local {
  type: totalData_Types.LocalPartnerId.partnerId_Local_REQUEST
  partnerId: string
}
