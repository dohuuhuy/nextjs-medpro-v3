import { TotalDataTypes } from 'store/interface'

export type TotalDataActions =
  | ListPartnersAction
  | ListCityAction
  | PartnerIdlocalAction

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

// ----------------------------------------------------------------------------------------------

export type ListCityAction =
  | ListCityReques
  | ListCityRequestSuccess
  | SetParnerId

export interface ListCityReques {
  type: TotalDataTypes.ListCity.LIST_CITY_REQUEST
}

export interface ListCityRequestSuccess {
  type: TotalDataTypes.ListCity.LIST_CITY_REQUEST_SUCCESS
  listCity: any[]
}
