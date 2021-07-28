import { TotalDataTypes } from '@store/interface'

export type TotalDataActions = listPartners_Action | partnerId_local_Action

// ----------------------------------------------------------------------------------------------

export type listPartners_Action =
  | LIST_PARTNERS_REQUEST
  | LIST_PARTNERS_REQUEST_Success
  | set_parnerId

export interface LIST_PARTNERS_REQUEST {
  type: TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST
}

export interface LIST_PARTNERS_REQUEST_Success {
  [x: string]: any
  type: TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST_SUCCESS
  list_partners: any[]
}

export interface set_parnerId {
  type: TotalDataTypes.ListPartners.SET_PARTNERID
  partnerId: any
}

// ----------------------------------------------------------------------------------------------
export type partnerId_local_Action = setPartnerIdLocal

export interface setPartnerIdLocal {
  type: TotalDataTypes.LocalPartnerId.PARTNERID_LOCAL_REQUEST
  partnerId: string
}
