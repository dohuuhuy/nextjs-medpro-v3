import { TotalDataTypes } from '@store/interface'

export type TotalDataActions = listPartners_Action | partnerId_local_Action

// ----------------------------------------------------------------------------------------------

export type listPartners_Action =
  | listPartners_Request
  | listPartners_Request_Success
  | set_parnerId

export interface listPartners_Request {
  type: TotalDataTypes.ListPartners.ListPartners_REQUEST
}

export interface listPartners_Request_Success {
  [x: string]: any
  type: TotalDataTypes.ListPartners.ListPartners_REQUEST_SUCCESS
  list_partners: any[]
}

export interface set_parnerId {
  type: TotalDataTypes.ListPartners.SET_PartnerId
  partnerId: any
}

// ----------------------------------------------------------------------------------------------
export type partnerId_local_Action = setPartnerIdLocal

export interface setPartnerIdLocal {
  type: TotalDataTypes.LocalPartnerId.partnerId_Local_REQUEST
  partnerId: string
}
