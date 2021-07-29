import { TotalDataTypes } from '@store/interface'

export type TotalDataActions = ListPartnersAction | PartnerIdlocalAction

// ----------------------------------------------------------------------------------------------

export type ListPartnersAction =
  | ListPartnersReques
  | ListPartnersRequestSuccess
  | SetParnerId

export interface ListPartnersReques {
  type: TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST
}

export interface ListPartnersRequestSuccess {
  type: TotalDataTypes.ListPartners.LIST_PARTNERS_REQUEST_SUCCESS
  listPartners: any[]
}

export interface SetParnerId {
  type: TotalDataTypes.ListPartners.SET_PARTNERID
  partnerId: any
}

// ----------------------------------------------------------------------------------------------
export type PartnerIdlocalAction = SetPartnerIdLocal

export interface SetPartnerIdLocal {
  type: TotalDataTypes.LocalPartnerId.PARTNERID_LOCAL_REQUEST
  partnerId: string
}
